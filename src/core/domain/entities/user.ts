import { BaseDomain } from './base.domain';

export class User extends BaseDomain {
  email: string;
  companyName: string;
  password: string;
}
