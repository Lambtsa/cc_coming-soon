import type { NextApiRequest, NextApiResponse } from "next";
import { MailchimpErrors } from "types/errors";
import mailchimpClient from "@mailchimp/mailchimp_marketing";
import { validateInput } from "@helpers/zod";

mailchimpClient.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

/**
 * API endpoint to subscribe a user to the mailing list in Mailchimp
 * Have to pass email and name in the body of the request.
 */
const subscribeUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name } = req.body;

  if (req.method !== "POST") {
    return res.status(405);
  }

  if (!email || !name) {
    return res.status(400).json({ error: MailchimpErrors.MissingEmail });
  }

  if (!validateInput({ email, name })) {
    return res.status(400).json({ error: MailchimpErrors.InvalidResource });
  }

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
    res.status(201).send({});
  } catch (err) {
    console.log({ err });
    res.status(400).send(err);
  }
};

export default subscribeUser;
