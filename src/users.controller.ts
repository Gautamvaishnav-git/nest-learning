import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './DTO/createUser.dto';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private UserService: UsersService) {}
  @Post()
  createUser(@Body() body: CreateUserDto) {
    this.UserService.addUser(body);
    return { message: 'User Added Successfully!' };
  }

  @Get()
  getUser() {
    return this.UserService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.UserService.getUser(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() body: CreateUserDto) {
    this.UserService.updateUser(id, body);
    return { message: 'User updated Successfully!' };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    this.UserService.deleteUser(id);
    return { message: 'User deleted successfully!' };
  }
}
