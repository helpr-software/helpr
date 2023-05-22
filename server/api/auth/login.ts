import { H3Event } from "h3";
import { getGoogleInfos } from "~/server/app/googleService";
import { login } from "~/server/app/authService";

export default eventHandler(async (event: H3Event) => {
  const { code } = await readBody(event);
  const { user, tokens } = await getGoogleInfos(code);
  const { access_token } = await login(user, tokens);
  setCookie(event, "accessToken", access_token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return { message: "success" };
});
