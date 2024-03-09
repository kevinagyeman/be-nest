import { Document } from 'mongoose';

export interface IRestaurant extends Document {
  readonly name: string;
  readonly phoneNumber: string;
  readonly description: string;
  readonly address: string;
  readonly email: string;
}
