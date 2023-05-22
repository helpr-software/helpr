import { H3Event } from "h3";
import { logout } from "~/server/app/authService";
import { revokeGoogleToken } from "~/server/app/googleService";

export default eventHandler(async (event: H3Event) => {
  const accessToken = getCookie(event, "accessToken");
  try {
    if (accessToken) {
      await revokeGoogleToken(accessToken);
      await logout(accessToken);
    }
  } catch (_) {
    /* empty */
  }
  deleteCookie(event, "accessToken");
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Logged out" }),
  };
});
