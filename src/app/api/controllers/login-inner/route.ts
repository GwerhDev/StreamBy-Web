import bcrypt from "bcrypt";
import UserModel from "../../models/User";
import { message } from "../../messages";
import { consts } from "../../misc/consts";
import { createToken } from "../../integrations/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();

    const user = await UserModel.findOne({ email: req.email });
    
    if (!user) return new NextResponse(JSON.stringify({ error: message.login.notexistinguser }), {
      status: 400
    });

    if (user.status === consts.status.pending) return new NextResponse(JSON.stringify({ error: message.login.pending }), {
      status: 400
    });

    if (req.password !== null && req.email !== null) {
      const passwordMatch = await bcrypt.compare(req.password, user.password);

      console.log(passwordMatch);

      if (passwordMatch) {
        const { _id, username, email } = user;
        const data_login = { _id, username, email };
        const token = await createToken(data_login, 3);

        return new NextResponse(JSON.stringify(token), {
          status: 200
        });

      } else {
        return new NextResponse(JSON.stringify({ error: message.login.error }), {
          status: 400
        });
      };
    };

    return new NextResponse(JSON.stringify({ error: message.login.failure }), {
      status: 400
    });
    
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: message.signup.error }), {
      status: 500
    });
  }
};
