import { NextRequest, NextResponse } from "next/server";
import { message } from "../../messages";
import { decodeToken } from "../../integrations/jwt";
import UserModel from "../../models/User";

export async function POST(request: NextRequest) {
  try {
    const userToken = await request.json();    
    const decodedToken: any = await decodeToken(userToken);

    const user = await UserModel.findById(decodedToken.data._id);
    if(!user) return new NextResponse(JSON.stringify({ logged: false, message: message.user.notfound }), {
      status: 404
    });

    const userData = {
      _id: user._id,
      username: user.username,
      email: user.email,
      status: user.isVerified,
      role: user.role,
      profilePic: user.profilePic
    };

    return new NextResponse(JSON.stringify({ userData, logged: false }), {
      status: 200
    });

  } catch (error) {
    return new NextResponse(JSON.stringify({ error: message.auth.error, logged: false }), {
      status: 500
    });
  }
};
