import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto'; // Import DTO Create
import { UpdateUserDto } from './dto/update-user.dto'; // Import DTO Update

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // CREATE
  @Post()
  // Ganti 'any' dengan 'CreateUserDto'
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // READ ALL
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // READ ONE
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  // UPDATE (Partial)
  @Patch(':id')
  // Ganti 'any' dengan 'UpdateUserDto'
  updatePatch(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  // UPDATE (Full)
  @Put(':id')
  updatePut(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  // DELETE
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}