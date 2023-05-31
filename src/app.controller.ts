import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

export interface IStaticDatas {
  id: number;
  name: string;
  age: number;
}

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}
  private readonly datas: IStaticDatas[] = [
    {
      id: 1,
      name: 'rahul dotel',
      age: 22,
    },
    {
      id: 2,
      name: 'subash tamang',
      age: 22,
    },
    {
      id: 3,
      name: 'smaran sapkota',
      age: 22,
    },
    {
      id: 4,
      name: 'Bigesh gurung',
      age: 22,
    },
    {
      id: 5,
      name: 'Bibek lamichane',
      age: 22,
    },
    {
      id: 6,
      name: 'Rajak Dotel',
      age: 22,
    },
  ];
  @Get('content')
  getContents(): IStaticDatas[] {
    return this.datas;
  }
}
