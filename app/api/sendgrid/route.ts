import sendgrid from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const reqq = await req.json();
    console.log(reqq);

    await sendgrid.send({
      to: "suyogya.luitel@gresianepal.com",
      from: "ict@siyzo.com",
      subject: "Test Mail",
      html: `<div>Recieved Mail</div>`,
    });
  } catch (err) {
    console.log("error", err);
    return NextResponse.json({ error: "ERROR OCCURED" });
  }
  return NextResponse.json({ error: "" });
}
