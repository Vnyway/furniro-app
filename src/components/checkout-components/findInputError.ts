import { FieldErrors } from "react-hook-form";

interface ErrorObject {
  [key: string]: any;
}

export const findInputError = (
  errors: FieldErrors,
  name: string
): { error: ErrorObject } => {
  const filtered = Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((cur: ErrorObject, key) => {
      return Object.assign(cur, { error: errors[key] });
    }, {});
  return filtered as { error: ErrorObject };
};
