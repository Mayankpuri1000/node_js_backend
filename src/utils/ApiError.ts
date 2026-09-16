class ApiError extends Error {
  statusCode: number;
  message: string;
  error: string[];
  stack: string;
  success: boolean
  data: any;

  constructor(
    statusCode: number,
    message: string = "Something went wrong",
    error: string[] = [],
    stack: string,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    this.stack = stack;
    this.success = false;
    this.data = null;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}


export { ApiError };