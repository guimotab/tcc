type frontErrors = "AxiosError" | "CredentialsSignin"
export type messageResponse = frontErrors | "Success" |
  "ServerError" |
  "EmailAlreadyUsed" |
  "IncorrectCredentials" |
  "GroupNotFound" |
  "InvalidInvite" |
  "UserExistOnGroup"