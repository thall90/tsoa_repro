import { Controller, Get, Path, Response, Route } from "tsoa";
import { ApiError } from "../apiErrors";

interface User {
  id: number;
  name: string;
  email: string;
}
@Response<ApiError>(
  400,
  "Bad Request",
  {
    name: "ApiError",
    statusCode: 400,
    message: "Bad Request",
  }
)
@Route("users")
export class UserController extends Controller {
  @Get("{userId}")
  public async getUser(
    @Path() userId: number
  ): Promise<User> {
    return {
      id: userId,
      name: "John Doe",
      email: "john@example.com"
    };
  }
} 