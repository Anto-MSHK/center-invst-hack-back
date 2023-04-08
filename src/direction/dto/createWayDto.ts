import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/models/user';

export class CreateWayDto {
  @ApiProperty({
    example: 'ios разработчик',
    description: 'user data',
  })
  name: string;

  @ApiProperty({
    example: 'описание',
    description: 'user data',
  })
  desc: string;
}
