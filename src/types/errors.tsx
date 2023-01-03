export enum MailchimpErrors {
  MemberExists = "Member Exists",
  MissingEmail = "Missing Email",
  InvalidResource = "Invalid Resource",
}

export interface ErrorResponseMailChimp {
  title: MailchimpErrors;
  status: number;
  detail: string;
  instance: string;
}
