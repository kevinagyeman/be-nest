import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Dish {
  @Prop()
  name: string;

  @Prop()
  additionalInfo: string;
}
export const DishSchema = SchemaFactory.createForClass(Dish);
