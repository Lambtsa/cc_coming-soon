import type { NextApiRequest, NextApiResponse } from 'next';
import { MailchimpErrors } from 'types/errors';
import mailchimpClient from "@mailchimp/mailchimp_marketing";

mailchimpClient.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

/**
 * 1. gather information from the front end (email and first name)
 * 2. send that information to mailchimp
 * 3. save the information in a db for our own data
 */

const subscribeUser =  async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: MailchimpErrors.MissingEmail });
  }

  /* NOTE: What happens when the mailchimp request returns a 500 error?? */
  try {
    await mailchimpClient.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: name
      },
      language: "fr"
    });
    res.status(201)
  } catch (err) {
    // HACK: Type annotations not available yet in Typescript @see https://github.com/Microsoft/TypeScript/issues/20024
    const error = err as any
    console.log({ error: error.response.text as mailchimpClient.MemberErrorResponse })
    res.status(400).json({ message: error.response.text })
  }
};

export default subscribeUser;
