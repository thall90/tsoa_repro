export class ApiError extends Error {
  public readonly statusCode?: number;
  public readonly data?: any;

  constructor(
    // Name of the original error if we're ok passing it along to the caller
    // e.g. originalError.name
    name: string,
    httpStatusCode: number,
    options: {
      message?: string;
      data?: any;
    } = {}
  ) {
    super(options.message ?? "derp");
    this.name = name;
    this.statusCode = httpStatusCode;
    this.data = options.data;
  }
}