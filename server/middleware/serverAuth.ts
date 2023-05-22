import { H3Event } from "h3";
import { getUserByAccessToken } from "~/server/app/userService";
import { isString } from "@vueuse/core";

export default eventHandler(async (event) => {
  const isAllowed = await protectAuthRoute(event);

  if (!isAllowed) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized, please login",
      }),
    );
  }
});

async function protectAuthRoute(event: H3Event): Promise<boolean> {
  const protectedRoutes = ["/api/admin", "/api/user", "/api/stripe"];

  if (event.path === undefined || !protectedRoutes.some((route) => event.path?.startsWith(route))) {
    return true;
  } else {
    const accessToken = getCookie(event, "accessToken");
    const hasAccessToken = isString(accessToken);
    if (!hasAccessToken) return false;
    const user = await getUserByAccessToken(accessToken);
    if (!user) return false;
  }
  return true;
}
