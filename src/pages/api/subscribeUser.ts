import type { NextApiRequest, NextApiResponse } from "next";
import { MailchimpErrors } from "types/errors";
import mailchimpClient from "@mailchimp/mailchimp_marketing";
import { validateInput } from "@helpers/zod";

mailchimpClient.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

interface MailChimpResponse {
  status: Number;
  response: Response;
}

/**
 * API endpoint to subscribe a user to the mailing list in Mailchimp
 * Have to pass email and name in the body of the request.
 */
const subscribeUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name } = req.body;

  if (req.method !== "POST") {
    return res.status(405);
  }

  if (!validateInput({ email, name })) {
    return res.status(400).json({ error: MailchimpErrors.InvalidResource });
  }

  if (!email || !name) {
    return res.status(400).json({ error: MailchimpErrors.MissingEmail });
  }

  /* NOTE: What happens when the mailchimp request returns a 500 error?? */
  try {
    await mailchimpClient.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
        },
        language: "fr",
      }
    );
    res.status(201);
  } catch (err) {
    // HACK: Type annotations not available yet in Typescript @see https://github.com/Microsoft/TypeScript/issues/20024
    const error = err as MailChimpResponse;
    console.log({ err: error.status, resp: error.response });
    res.status(400).json({ message: error.response.body });
  }
};

export default subscribeUser;
