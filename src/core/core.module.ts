import { Module } from '@nestjs/common';
import { RegisterUserUseCase } from './use-cases/user/register-user.usecase';

@Module({
  imports: [],
  providers: [RegisterUserUseCase],
  exports: [RegisterUserUseCase],
})
export class CoreModule {}
