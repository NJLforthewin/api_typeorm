import { AppDataSource } from "../db";
import { User } from "./user.model";

export class UserService {
  private userRepository = AppDataSource.getRepository(User);

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getById(id: number): Promise<User | null> {
    return await this.userRepository.findOneBy({ id });
  }

  async create(userData: Partial<User>): Promise<void> {
    const user = this.userRepository.create(userData);
    await this.userRepository.save(user);
  }

  async update(id: number, userData: Partial<User>): Promise<void> {
    await this.userRepository.update(id, userData);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
