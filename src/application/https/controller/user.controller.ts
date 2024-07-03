import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RegisterUserDto } from "src/application/dtos/request/register-user.dto";



@ApiTags('user')
@Controller('')
export class UserController{

 @Post('/user')  
 register(@Body() registeruserDto:RegisterUserDto){} 
 
 
 @Post('auth')  
 login(@Body() registeruserDto:RegisterUserDto){} 
 
}