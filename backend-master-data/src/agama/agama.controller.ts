import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AgamaService } from './agama.service';
import { CreateAgamaDto } from './dto/create-agama.dto';
import { UpdateAgamaDto } from './dto/update-agama.dto';

@Controller('master/agama') 
export class AgamaController {
  constructor(private readonly agamaService: AgamaService) {}

  @Post()
  create(@Body() createAgamaDto: CreateAgamaDto) {
    return this.agamaService.create(createAgamaDto);
  }

  @Get()
  findAll() {
    return this.agamaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agamaService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updateAgamaDto: UpdateAgamaDto) {
    return this.agamaService.update(+id, updateAgamaDto);
  }

  @Put(':id')
  updatePut(@Param('id') id: string, @Body() updateAgamaDto: UpdateAgamaDto) {
    return this.agamaService.update(+id, updateAgamaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agamaService.remove(+id);
  }
}