/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import { UserService } from './user.service';
import userValidatorSchema from './user.joi.validator';
import { Document } from 'mongoose';

// 1. Create a new user
export const userCreationController = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const { value, error } = userValidatorSchema.validate(userData);
    if (error) {
      res.status(400).json({
        success: false,
        message: 'Validation erq322ror',
        error: {
          code: 400,
          description: error.details[0].message,
        },
      });

    } else {
      try {
        const result = await UserService.createUserService(value);
        const { password, ...withoutPass } = result.toObject();
        res.status(200).json({
          success: true,
          message: "User has created successfully",
          data: withoutPass,
        })
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Internal server error! Please try again.',
          error: {
            code: 500,
            description: 'Internal server error! Please try again.',
          },
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error! Please try again.',
      error: {
        code: 500,
        description: 'Internal server error! Please try again.',
      },
    });
  }
};


// 2. Retrieve a list of all users
export const getAllUserController = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUserService();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error! Please try again.',
      error: {
        code: 500,
        description: 'Internal server error! Please try again.',
      },
    });
  }
};


// 3. Retrieve a specific user by ID
export const getSingleUserByIdController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await UserService.getAUserByUserIdService(userId);

    if (result.length < 1) {
      res.status(404).json({
        success: false,
        message: 'User is not found',
        error: {
            code: 404,
            description: 'User is not found!',
        },
    });
    } else {
      res.status(200).json({
        success: true,
        message: 'User data has retrieved successfully!',
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error! Please try again.',
      error: {
        code: 500,
        description: 'Internal server error! Please try again.',
      },
    });
  }
};


//  4. Update user information
export const updateSingleUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const userData = req.body;
    const result = await UserService.updateAUserByUserIdService(userId, userData) as Document;

    if (result === null) {
      res.status(404).json({
        success: false,
        message: 'User is not found!',
        error: {
            code: 404,
            description: 'User is not found!!',
        },
    });
    } else {
      try {
        const { password, ...withoutPass } = result.toObject();
        res.status(200).json({
          success: true,
          message: 'User updated successfully!',
          data: withoutPass,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: 'Internal server error! Please try again.',
          error: {
            code: 500,
            description: 'Internal server error! Please try again.',
          },
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error! Please try again.',
      error: {
        code: 500,
        description: 'Internal server error! Please try again.',
      },
    });
  }
};


// 5. Delete a user by ID
export const userDeleteController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await UserService.deleteAUserService(userId);
    if (result === 0) {
      res.status(404).json({
        success: false,
        message: 'User is not found!',
        error: {
            code: 404,
            description: 'User is not found!!',
        },
    });
    } else {
      res.status(200).json({
        success: true,
        message: 'User has deleted successfully!',
        data: result,
      });
    }

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error! Please try again.',
      error: {
        code: 500,
        description: 'Internal server error! Please try again.',
      },
    });
  }
};

export const UserControllers = {
  userCreationController,
  getAllUserController,
  getSingleUserByIdController,
  updateSingleUserController,
  userDeleteController,
};
