import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Model,
  Table,
  HasMany,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { Info } from './info.model';
import {
  HasManyAddAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManySetAssociationsMixin,
  HasOneCreateAssociationMixin,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
} from 'sequelize';
import { Way } from './way.model';
import { CreateDirectionDto } from '../dto/createDirectionDto';
import { CreateWayDto } from '../dto/createWayDto';
import { CreateInfoDto } from '../dto/createInfoDto';
@Table
export class Direction extends Model<Direction, CreateDirectionDto> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @ApiProperty({ description: 'Заголовок направления подготовки' })
  @Column({ allowNull: false })
  title: string;

  @ApiProperty({ description: 'Описание направления подготовки' })
  @Column({ allowNull: false })
  desc: string;

  @ApiProperty({ description: 'Связанные модели информации' })
  @HasMany(() => Info)
  info: Info[];
  public getInfos!: HasManyGetAssociationsMixin<Info>;
  public addInfo!: HasManyAddAssociationMixin<CreateInfoDto, number>;
  public setInfos!: HasManySetAssociationsMixin<Info, number>;
  public removeInfo!: HasManyRemoveAssociationMixin<Info, number>;
  public createInfo!: HasManyCreateAssociationMixin<Info>;
  public countInfos!: HasManyCountAssociationsMixin;

  @ApiProperty({ description: 'Связанные модели пути' })
  @HasMany(() => Way)
  way: Way[];
  public getWays!: HasManyGetAssociationsMixin<Way>;
  public addWay!: HasManyAddAssociationMixin<CreateWayDto, number>;
  public setWays!: HasManySetAssociationsMixin<Way, number>;
  public removeWay!: HasManyRemoveAssociationMixin<Way, number>;
  public createWay!: HasManyCreateAssociationMixin<Way>;
  public countWays!: HasManyCountAssociationsMixin;
}
