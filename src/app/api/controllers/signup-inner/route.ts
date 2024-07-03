import bcrypt from "bcrypt";
import UserModel from "../../models/User";
import { message } from "../../messages";
import { consts } from "../../misc/consts";
import { createToken } from "../../integrations/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    const { username, password, email } = req;
    const existingUser = await UserModel.findOne({ email: email });
  
    if (!username || !password || !email) return new NextResponse(JSON.stringify({ error: message.signup.error }), {
      status: 400
    });
  
    if (existingUser) {
      const tokenData = {
        id: existingUser._id,
        role: existingUser.role,
      };
      
      const token = await createToken(tokenData, 3);
      return new NextResponse(JSON.stringify({ token }), {
        status: 200,
      });
    };

    const userData = {
      username,
      password,
      email,
      role: consts.role.freemium,
      status: consts.status.inactive,
      profilePic: null,
    };
    
    const salt = await bcrypt.genSalt();
    userData.password = await bcrypt.hash(password, salt);

    const userCreated = await UserModel.create(userData);

    const tokenData = {
      id: userCreated._id,
      role: userCreated.role,
    };

    const token = await createToken(tokenData, 3);

    return new NextResponse(JSON.stringify({ msg: message.signup.success, token }), {
      status: 200,
    });

  } catch (error) {
    return new NextResponse(JSON.stringify({ error: message.signup.error }),{
      status: 500
    });
  }
};
