import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { JenisDokumenService } from './jenis-dokumen.service';
import { CreateJenisDokumanDto } from './dto/create-jenis-dokuman.dto';
import { UpdateJenisDokumanDto } from './dto/update-jenis-dokuman.dto';

@Controller('jenis-dokumen')
export class JenisDokumenController {
  constructor(private readonly jenisDokumenService: JenisDokumenService) {}

  @Post()
  create(@Body() createJenisDokumanDto: CreateJenisDokumanDto) {
    return this.jenisDokumenService.create(createJenisDokumanDto);
  }

  @Get()
  findAll() {
    return this.jenisDokumenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jenisDokumenService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updateJenisDokumanDto: UpdateJenisDokumanDto) {
    return this.jenisDokumenService.update(+id, updateJenisDokumanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jenisDokumenService.remove(+id);
  }

  @Put(':id')
  updatePut(@Param('id') id: string, @Body() updateJenisDokumanDto: UpdateJenisDokumanDto) {
    return this.jenisDokumenService.update(+id, updateJenisDokumanDto);
  }
}
