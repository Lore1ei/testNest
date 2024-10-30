import { Body, Controller, Get, Param, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { CreateUserDto } from "./dtos/CreateUser.dto";

@Controller('users')
export class UsersController {
  @Get()
  getUsers(){
    return {username: 'Alexandr', email: 'alex@gmail.com'}
  }

 @Post('create')
  createUser(@Body() userData: CreateUserDto){
   console.log(userData);
   return {};
 }

 @Get(':id')
 getUserById(@Param('id') id: string){
   console.log(id);
   return { id }
 }
}
