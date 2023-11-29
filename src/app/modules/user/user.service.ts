import UserData from './user.interface';
import { UserModel } from './user.model';


// 1. Create a new user
const createUserService = async (userData: UserData) => {
  try {
    const result = await UserModel.create(userData);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 2. Retrieve a list of all users
const getAllUserService = async () => {
  try {
    const result = await UserModel.find(
      {},
      { _id: 0, username: 1, fullName: 1, age: 1, email: 1, address: 1 },
    );
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 3. Retrieve a specific user by ID
const getAUserByUserIdService = async (userId: string) => {
  try {
    const result = await UserModel.find({ userId: userId }).select({
      _id: 0,
      password: 0,
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 4. Update user information
const updateAUserByUserIdService = async (userId: string, userData: UserData) => {
  try {
    const result = await UserModel.findOneAndUpdate(
      { userId: userId },
      { $set: userData },
      { new: true },
    );
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 5. Delete a user by ID
const deleteAUserService = async (userId: string) => {
  try {
    const result = await UserModel.deleteOne({ userId: userId });
    return result.deletedCount;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const UserService = {
  createUserService,
  getAllUserService,
  getAUserByUserIdService,
  updateAUserByUserIdService,
  deleteAUserService,
};
