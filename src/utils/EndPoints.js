import { baseUrl } from "../config";

export const ApiEndPoints = {
  // REGISTRATION API
  //   REGISTRATION_API: `${baseUrl}`,
  OTPVERIFY_API: `${baseUrl}/auth/otp_verify`,
  // LOGIN API
  LOGIN_API: `${baseUrl}/auth/userlogin`,
  //   LOGIN_API: "LOGINAPI",
  // FORGET API
  FORGET_PASSWORD_API: "FORGETPASSWORDAPI",
};
