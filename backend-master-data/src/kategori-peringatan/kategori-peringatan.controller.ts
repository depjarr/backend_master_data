import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { KategoriPeringatanService } from './kategori-peringatan.service';
import { CreateKategoriPeringatanDto } from './dto/create-kategori-peringatan.dto';
import { UpdateKategoriPeringatanDto } from './dto/update-kategori-peringatan.dto';

@Controller('kategori-peringatan')
export class KategoriPeringatanController {
  constructor(private readonly kategoriPeringatanService: KategoriPeringatanService) {}

  @Post()
  create(@Body() createKategoriPeringatanDto: CreateKategoriPeringatanDto) {
    return this.kategoriPeringatanService.create(createKategoriPeringatanDto);
  }

  @Get()
  findAll() {
    return this.kategoriPeringatanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kategoriPeringatanService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updateKategoriPeringatanDto: UpdateKategoriPeringatanDto) {
    return this.kategoriPeringatanService.update(+id, updateKategoriPeringatanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kategoriPeringatanService.remove(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateKategoriPeringatanDto: UpdateKategoriPeringatanDto) {
    return this.kategoriPeringatanService.update(+id, updateKategoriPeringatanDto);
  }
}
