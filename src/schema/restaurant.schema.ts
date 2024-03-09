import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  email: string;

  @Prop()
  description: string;
}
export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
