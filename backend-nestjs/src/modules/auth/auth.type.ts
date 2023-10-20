import { IsNotEmpty } from 'class-validator';
import { PickType } from '@nestjs/swagger';
import { User } from '../user/user.entity';

export class LoginReqDto {
  /**
   * Username
   * @example 'user01'
   */
  @IsNotEmpty()
  username: string;

  /**
   * Mật khẩu
   * @example 'user01'
   */
  @IsNotEmpty()
  password: string;
}

export class LoginRspDto {
  /**
   * Thông tin user
   */
  authInfo: JwtPayload;

  /**
   * Token dùng để truy cập
   * @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJOYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiYXZhdGFyIjoiaHR0cHM6Ly9hcGkuZGljZWJlYXIuY29tLzcueC9hdmF0YWFhcnMvc3ZnP3NlZWQ9YWRtaW4mYmFja2dyb3VuZENvbG9yPWI2ZTNmNCZhY2Nlc3Nvcmllcz1yb3VuZCxwcmVzY3JpcHRpb24wMSxwcmVzY3JpcHRpb24wMix3YXlmYXJlcnMsa3VydCxzdW5nbGFzc2VzJmFjY2Vzc29yaWVzUHJvYmFiaWxpdHk9MjAmY2xvdGhpbmc9c2hpcnRDcmV3TmVjayxzaGlydFNjb29wTmVjayxzaGlydFZOZWNrLGdyYXBoaWNTaGlydCxjb2xsYXJBbmRTd2VhdGVyLGJsYXplckFuZFN3ZWF0ZXIsYmxhemVyQW5kU2hpcnQsaG9vZGllJmV5ZWJyb3dzPWRlZmF1bHROYXR1cmFsLGZsYXROYXR1cmFsLGZyb3duTmF0dXJhbCxyYWlzZWRFeGNpdGVkLGRlZmF1bHQscmFpc2VkRXhjaXRlZE5hdHVyYWwmZXllcz1zdXJwcmlzZWQsZGVmYXVsdCxzcXVpbnQmZmFjaWFsSGFpcltdJmZhY2lhbEhhaXJDb2xvcltdJmZhY2lhbEhhaXJQcm9iYWJpbGl0eT0wJmhhaXJDb2xvcj0yYzFiMTgsNzI0MTMzLGE1NTcyOCw0YTMxMmMsYjU4MTQzLGM5MzMwNSxlY2RjYmYsZjU5Nzk3JmhhdENvbG9yPTI1NTU3Yyw1MTk5ZTQsYTdmZmM0LGIxZTJmZixlNmU2ZTYsZmY0ODhlLGZmNWM1YywyNjJlMzMsM2M0ZjVjLDY1YzlmZiw5Mjk1OTgsZmZhZmI5LGZmZGViNSxmZmZmYjEsZmZmZmZmJm1vdXRoPXNtaWxlJnNraW5Db2xvcj1lZGI5OGEsZmZkYmI0LGQwOGI1YixmZDk4NDEmdG9wPWJpZ0hhaXIsYm9iLGJ1bixjdXJseSxjdXJ2eSxkcmVhZHMsZnJpZGEsZnJvLGZyb0JhbmQsbG9uZ0J1dE5vdFRvb0xvbmcsbWlhV2FsbGFjZSxzaGF2ZWRTaWRlcyxzdHJhaWdodDAxLHN0cmFpZ2h0MDIsc3RyYWlnaHRBbmRTdHJhbmQiLCJmaXJzdE5hbWUiOiJBbmggQ2hpIiwibGFzdE5hbWUiOiJWxakiLCJyb2xlcyI6WyJBRE1JTiJdLCJpYXQiOjE2OTc4NjI0MTksImV4cCI6MTY5Nzg2NDIxOX0.voF-fFx-YdiXjENhWpmrx8bI-iw6cJoElAYB1c2o8qM
   */
  accessToken: string;
}

export class JwtPayload extends PickType(User, [
  'userName',
  'email',
  'firstName',
  'lastName',
  'avatar',
] as const) {
  /**
   * Định danh duy nhất cho user
   * @example 'user01'
   */
  sub: string;

  /**
   * Danh sách các role
   * @example ["STUDENT", "ADMIN"]
   */
  roles: string[];
}
