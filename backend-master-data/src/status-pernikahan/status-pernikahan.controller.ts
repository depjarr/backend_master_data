import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StatusPernikahanService } from './status-pernikahan.service';
import { CreateStatusPernikahanDto } from './dto/create-status-pernikahan.dto';
import { UpdateStatusPernikahanDto } from './dto/update-status-pernikahan.dto';

@Controller('status-pernikahan')
export class StatusPernikahanController {
  constructor(private readonly statusPernikahanService: StatusPernikahanService) {}

  @Post()
  create(@Body() createStatusPernikahanDto: CreateStatusPernikahanDto) {
    return this.statusPernikahanService.create(createStatusPernikahanDto);
  }

  @Get()
  findAll() {
    return this.statusPernikahanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusPernikahanService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updateStatusPernikahanDto: UpdateStatusPernikahanDto) {
    return this.statusPernikahanService.update(+id, updateStatusPernikahanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusPernikahanService.remove(+id);
  }

  @Put(':id')
  updatePut(@Param('id') id: string, @Body() updateStatusPernikahanDto: UpdateStatusPernikahanDto) {
    return this.statusPernikahanService.update(+id, updateStatusPernikahanDto);
  }
}
