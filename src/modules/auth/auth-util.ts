import { Authentication } from './auth-constants';

export function getBearerToken(): string {
  return `Bearer ${getAccessToken()}`;
}

export function getAccessToken(): string | null {
  return localStorage.getItem(Authentication.AccessToken);
}

export function setAccessToken(accessToken: string): void {
  localStorage.setItem(Authentication.AccessToken, accessToken);
}

export function getRefreshToken(): string | null {
  return localStorage.getItem(Authentication.RefreshToken);
}

export function setRefreshToken(refreshToken: string): void {
  localStorage.setItem(Authentication.RefreshToken, refreshToken);
}

export function getExpiryIn(): string | null {
  return localStorage.getItem(Authentication.ExpiryIn);
}

export function setExpiryIn(expiryIn: string): void {
  localStorage.setItem(Authentication.ExpiryIn, expiryIn);
}

export function getDeviceId(): string | null {
  return localStorage.getItem(Authentication.DeviceId);
}

export function setDeviceId(deviceId: string) {
  localStorage.setItem(Authentication.DeviceId, deviceId);
}

export function saveToken(
  accessToken: string,
  refreshToken: string,
  expiryIn: string,
  deviceId: string
): void {
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
  setExpiryIn(expiryIn);
  setDeviceId(deviceId);
}

export function destroySensitiveInfo(): void {
  localStorage.removeItem(Authentication.AccessToken);
  localStorage.removeItem(Authentication.RefreshToken);
  localStorage.removeItem(Authentication.ExpiryIn);
}
