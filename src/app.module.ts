import { Module } from '@nestjs/common';
import { UsersController } from "./users/controllers/users/users.controller";



@Module({
  imports: [],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
