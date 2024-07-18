import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({
    message: "API is working",
  });
};

// update user

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can update your account only"));
  }

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// delete User
export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can delete your account only"));
  }

  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
    
  } catch (error) {
    next(error);
  }
};
