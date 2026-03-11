import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CutiBlokLeaveService } from './cuti-blok-leave.service';
import { CreateCutiBlokLeaveDto } from './dto/create-cuti-blok-leave.dto';
import { UpdateCutiBlokLeaveDto } from './dto/update-cuti-blok-leave.dto';

@Controller('cuti-blok-leave')
export class CutiBlokLeaveController {
  constructor(
    private readonly cutiBlokLeaveService: CutiBlokLeaveService) {}

  @Post()
  create(@Body() createCutiBlokLeaveDto: CreateCutiBlokLeaveDto) {
    return this.cutiBlokLeaveService.create(createCutiBlokLeaveDto);
  }

  @Get()
  findAll() {
    return this.cutiBlokLeaveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cutiBlokLeaveService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updateCutiBlokLeaveDto: UpdateCutiBlokLeaveDto) {
    return this.cutiBlokLeaveService.update(+id, updateCutiBlokLeaveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cutiBlokLeaveService.remove(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCutiBlokLeaveDto: UpdateCutiBlokLeaveDto) {
    return this.cutiBlokLeaveService.update(+id, updateCutiBlokLeaveDto);
  }
}
