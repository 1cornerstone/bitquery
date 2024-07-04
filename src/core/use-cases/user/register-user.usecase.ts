import { RegisterUserDto } from 'src/application/dtos/request/register-user.dto';
import { BaseUseCase } from '../base.usecase';
import { TokenResponse } from 'src/application/dtos/response/token.response';
import { Inject } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/injection';
import { UserRepository } from 'src/core/interfaces/repository/user.repository';
import { ResourceAlreadyExistError } from 'src/core/errors/resource-already-exist.error';

export class RegisterUserUseCase extends BaseUseCase<
  RegisterUserDto,
  TokenResponse
> {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository,
  ) {
    super();
  }

  async execute(args: RegisterUserDto): Promise<TokenResponse> {
    const { email, password, companyName } = args;
    const user = await this.userRepository.findBy({ email });
    if (user) {
      throw new ResourceAlreadyExistError('Email already exist');
    }
    return {
      token: '',
    };
  }
}
