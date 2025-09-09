import { AppRoute } from '@/constants';
import router from '@/router';
import { AESCipher, RSACipher } from '@/utils/crypto';

import { loginApi, logoutApi, refreshTokenApi } from './auth-api';
import type { LoginForm, LoginRequest, RefreshTokenRequest } from './auth-type';
import { destroySensitiveInfo, getDeviceId, getRefreshToken, saveToken } from './auth-util';

export async function loginWithCredential({ username, password }: LoginForm) {
  try {
    const secretKey = AESCipher.generateRandomString();
    const data: LoginRequest = {
      username: username.trim(),
      password: AESCipher.encryptWithKey(password.trim(), secretKey),
      grantType: 'password',
      clientId: process.env.CLIENT_ID ?? '',
      clientSecret: process.env.CLIENT_SECRET ?? '',
      encryptedAesKey: RSACipher.encrypt(secretKey, process.env.PUBLIC_KEY ?? '')
    };

    const res = await loginApi(data);
    const { accessToken, refreshToken, expiresAt, deviceId } = res.data?.data ?? {};
    saveToken(accessToken, refreshToken, expiresAt, deviceId);
    return res.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
}

export async function refreshToken(): Promise<string | undefined> {
  try {
    if (getRefreshToken() && getDeviceId()) {
      const data: RefreshTokenRequest = {
        grantType: 'refresh_token',
        clientId: process.env.CLIENT_ID ?? '',
        clientSecret: process.env.CLIENT_SECRET ?? '',
        refreshToken: getRefreshToken() ?? ''
      };

      const res = await refreshTokenApi(data);
      const { accessToken, refreshToken, expiresAt, deviceId } = res.data?.data ?? {};
      saveToken(accessToken, refreshToken, expiresAt, deviceId);
      // TODO: display dialog session expired
      return 'Successfully';
    }

    destroySensitiveInfo();
    router.push({ name: AppRoute.LOGIN });
  } catch (error: any) {
    // TODO: display dialog session expired
    destroySensitiveInfo();
    router.push({ name: AppRoute.LOGIN });
  }
}

export function logout(): void {
  logoutApi();
  destroySensitiveInfo();
  router.push({ name: AppRoute.LOGIN });
}
