import { User } from 'src/core/domain/entities/user';

export interface UserRepository {
  findBy(findUserBy: FindUserBy, excludeBy?: FindUserByExlcude): Promise<User>;
  save(user: User): Promise<User>;
}

export interface FindUserBy {
  email?: string;
  id?: string;
  name?: string;
}

export interface FindUserByExlcude {
  password?: string;
}
