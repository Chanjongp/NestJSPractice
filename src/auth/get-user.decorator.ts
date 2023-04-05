import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    // Get Request Body
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
