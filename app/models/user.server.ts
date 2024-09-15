import { Database } from '../database/database.server';
import { hashPassword, comparePassword } from '../utils/password.server';

export interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}

export class UserModel {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  async createUser(username: string, email: string, password: string): Promise<User> {
    const passwordHash = await hashPassword(password);
    const now = new Date();

    const user: User = {
      id: crypto.randomUUID(),
      username,
      email,
      passwordHash,
      createdAt: now,
      updatedAt: now,
    };

    await this.db.users.insert(user);
    return user;
  }

  async getUserById(id: string): Promise<User | null> {
    return this.db.users.findOne({ id });
  }

  async getUser