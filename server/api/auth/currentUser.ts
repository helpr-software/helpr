import { isGoogleTokenValid } from "~/server/app/googleService";
import { getUserByAccessToken } from "~/server/app/userService";
import { formatUser } from "~/server/database/client";
import { isString } from "@vueuse/core";
import { H3Event } from "h3";

export default eventHandler(async (event: H3Event) => {
  const accessToken = getCookie(event, "accessToken");
  const hasAccessToken = isString(accessToken);
  if (!hasAccessToken) return null;
  const user = await getUserByAccessToken(accessToken);
  if (!user || !user.accessToken) return null;
  if (!(await isGoogleTokenValid(user.accessToken))) return null;
  return formatUser(user);
});
