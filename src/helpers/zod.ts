import { TypeOf, z } from "zod";

/* ################################################## */
/* Forms */
/* ################################################## */
/* TODO: add the email error message in french @see https://github.com/colinhacks/zod/blob/master/ERROR_HANDLING.md */
const validationSchema = z.object({
  email: z.string().email().trim(),
  name: z.string().min(1).trim(),
});

type InputDataType = TypeOf<typeof validationSchema>;

/**
 * Helper function that takes an input and returns boolean after validation.
 * Validation is currently hardcoded to a specific schema
 * @returns boolean
 */
export const validateInput = (input: InputDataType): boolean =>
  validationSchema.safeParse(input).success;
