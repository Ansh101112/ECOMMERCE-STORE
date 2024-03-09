import { comparepassword, hashpassword } from "../helpers/authhelper.js";
import userModels from "../models/userModels.js";
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    // Validation proof now!!
    if (!name) {
      return res.send({ message: "Name is required." });
    }
    if (!email) {
      return res.send({ message: "Email is required." });
    }
    if (!password) {
      return res.send({ message: "Password is required." });
    }
    if (!phone) {
      return res.send({ message: "Phone number is required." });
    }
    if (!address) {
      return res.send({ message: "Address is required." });
    }

    // Checking users
    const existinguser = await userModels.findOne({ email });
    // Checking existing user
    if (existinguser) {
      return res.send({
        success: false,
        message: "User already registered please LOGIN now."
      });
    } // Missing closing brace was here

    // Register user started
    const hashedpassword = await hashpassword(password);
    // Saving data now!!
    const user = await new userModels({ name, email, phone, address, password: hashedpassword }).save();

    res.status(201).send({
      success: true,
      message: "User register successfully",
      user
    });
  } catch (message) {
    console.log(message);
    res.status(500).send({
      success: false,
      message: "message in registration!!",
      message
    });
  }
};
export default registerController;

// LOGIN controller start here
export const logincontroller = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if both email and password are provided
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Both email and password are required."
      });
    }

    // Find user by email
    const user = await userModels.findOne({ email });

    // If user not found
    if (!user) {
      return res.status(401).send({
        success: false,
        message: "Email is not registered."
      });
    }

    // Compare passwords using bcrypt
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).send({
        success: false,
        message: "Incorrect email or password"
      });
    }

    // If everything is correct, send success response
    res.status(200).send({
      message: "LogIn successfully.",
      success: true,
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in login",
      error
    });
  }
};






// Test controller
