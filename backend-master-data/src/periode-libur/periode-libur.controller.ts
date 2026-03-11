import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PeriodeLiburService } from './periode-libur.service';
import { CreatePeriodeLiburDto } from './dto/create-periode-libur.dto';
import { UpdatePeriodeLiburDto } from './dto/update-periode-libur.dto';

@Controller('periode-libur')
export class PeriodeLiburController {
  constructor(private readonly periodeLiburService: PeriodeLiburService) {}

  @Post()
  create(@Body() createPeriodeLiburDto: CreatePeriodeLiburDto) {
    return this.periodeLiburService.create(createPeriodeLiburDto);
  }

  @Get()
  findAll() {
    return this.periodeLiburService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.periodeLiburService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updatePeriodeLiburDto: UpdatePeriodeLiburDto) {
    return this.periodeLiburService.update(+id, updatePeriodeLiburDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.periodeLiburService.remove(+id);
  }

  @Put(':id')
  updatePut(@Param('id') id: string, @Body() updatePeriodeLiburDto: UpdatePeriodeLiburDto) {
    return this.periodeLiburService.update(+id, updatePeriodeLiburDto);
  }
}
