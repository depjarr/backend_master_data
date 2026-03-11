import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PengurangKompetenKinerjaService } from './pengurang-kompeten-kinerja.service';
import { CreatePengurangKompetenKinerjaDto } from './dto/create-pengurang-kompeten-kinerja.dto';
import { UpdatePengurangKompetenKinerjaDto } from './dto/update-pengurang-kompeten-kinerja.dto';

@Controller('pengurang-kompeten-kinerja')
export class PengurangKompetenKinerjaController {
  constructor(private readonly pengurangKompetenKinerjaService: PengurangKompetenKinerjaService) {}

  @Post()
  create(@Body() createPengurangKompetenKinerjaDto: CreatePengurangKompetenKinerjaDto) {
    return this.pengurangKompetenKinerjaService.create(createPengurangKompetenKinerjaDto);
  }

  @Get()
  findAll() {
    return this.pengurangKompetenKinerjaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pengurangKompetenKinerjaService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updatePengurangKompetenKinerjaDto: UpdatePengurangKompetenKinerjaDto) {
    return this.pengurangKompetenKinerjaService.update(+id, updatePengurangKompetenKinerjaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pengurangKompetenKinerjaService.remove(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePengurangKompetenKinerjaDto: UpdatePengurangKompetenKinerjaDto) {
    return this.pengurangKompetenKinerjaService.update(+id, updatePengurangKompetenKinerjaDto);
  }
}
