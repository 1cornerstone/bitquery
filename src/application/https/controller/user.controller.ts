import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { LoginDto } from "src/application/dtos/request/login.dto";
import { RegisterUserDto } from "src/application/dtos/request/register-user.dto";



@ApiTags('user')
@Controller('')
export class UserController{

 @Post('/user')  
 register(@Body() registeruserDto:RegisterUserDto){} 
 
 
 @Post('auth')  
 login(@Body() loginDto:LoginDto){} 
 
}