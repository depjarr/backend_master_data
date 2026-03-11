import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StatusKehadiranService } from './status-kehadiran.service';
import { CreateStatusKehadiranDto } from './dto/create-status-kehadiran.dto';
import { UpdateStatusKehadiranDto } from './dto/update-status-kehadiran.dto';

@Controller('status-kehadiran')
export class StatusKehadiranController {
  constructor(private readonly statusKehadiranService: StatusKehadiranService) {}

  @Post()
  create(@Body() createStatusKehadiranDto: CreateStatusKehadiranDto) {
    return this.statusKehadiranService.create(createStatusKehadiranDto);
  }

  @Get()
  findAll() {
    return this.statusKehadiranService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusKehadiranService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updateStatusKehadiranDto: UpdateStatusKehadiranDto) {
    return this.statusKehadiranService.update(+id, updateStatusKehadiranDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusKehadiranService.remove(+id);
  }
  @Put(':id')
  updatePut(@Param('id') id: string, @Body() updateStatusKehadiranDto: UpdateStatusKehadiranDto) {
    return this.statusKehadiranService.update(+id, updateStatusKehadiranDto);
  }
}
