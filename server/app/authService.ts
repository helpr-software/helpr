import prisma from "~/server/database/client";
import { GoogleTokens, GoogleUser } from "~/types/Google";

export async function login(userInfos: GoogleUser, tokens: GoogleTokens) {
  const { email, given_name, family_name, picture, locale } = userInfos;
  const { access_token, refresh_token } = tokens;
  await prisma.user.upsert({
    where: {
      email,
    },
    update: {
      accessToken: access_token,
    },
    create: {
      email,
      locale,
      firstname: given_name,
      lastname: family_name,
      avatar: picture,
      accessToken: access_token,
      refreshToken: encrypt(refresh_token),
    },
  });
  return {
    access_token,
  };
}

export async function logout(accessToken: string) {
  await prisma.user.update({
    where: {
      accessToken,
    },
    data: {
      accessToken: null,
      refreshToken: null,
    },
  });
  return {
    success: true,
  };
}
