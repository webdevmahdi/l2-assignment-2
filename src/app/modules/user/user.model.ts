import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import UserData from './user.interface';
import config from '../../config';


const userDataSchema = new Schema<UserData>({
  userId: {
    type: Number,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  hobbies: {
    type: [String],
    required: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  orders: [
    {
      productName: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

// Hash password before saving to the database
userDataSchema.pre('save', async function (next) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const userPassword = this;
    userPassword.password = await bcrypt.hash(userPassword.password, Number(config.bcrypt_salt_rounds));
    next();
  } catch (error) {
    console.log(error);
  }
});

export const UserModel = model<UserData>('User', userDataSchema);
