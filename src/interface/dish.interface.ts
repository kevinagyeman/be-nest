import { Document } from 'mongoose';

export interface IDish extends Document {
  readonly name: string;
  readonly additionalInfo: string;
}
