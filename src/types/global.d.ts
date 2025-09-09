export {};

declare global {
  type SuccessResponse<T = any> = {
    data: T;
    message?: string;
    success?: boolean;
  };

  type ErrorResponse = {
    errorCode: string;
    message: string;
    statusCode: number;
  };
}
