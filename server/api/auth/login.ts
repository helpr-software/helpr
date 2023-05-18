import { H3Event } from "h3";
import { getGoogleInfos } from "~/server/app/googleService";

export default eventHandler(async (event: H3Event) => {
  const { code } = await readBody(event);
  const { user, tokens } = await getGoogleInfos(code);
  return { user, tokens };
});
