import nodemailer from "nodemailer"
import User from "../model/userModel"
import  bcryptjs from "bcryptjs"

export const sendmail = async({email, emailType, userId}:any) =>  {
    try {

        //generate random hash token
       const hashToken = await bcryptjs.hash(userId.toString(), 10)
       console.log(hashToken);

       if(emailType === "VERIFY"){
            await User.findByIdAndUpdate(userId,{verifyTokenen: hashToken,
            verifyTokenExpiry: Date.now() + 3600000}, {new: true, runValidators:true})
    
       } else if(emailType === "RESET"){
        await User.findByIdAndUpdate(userId,{forgotpasswordToken: hashToken,
            forgotpasswordTokenExpiry: Date.now() + 3600000}, {new: true, runValidators:true})
       }

    //    const transporter = nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 465,
    //     secure: true,
    //     auth: {
    //       user: 'davethsite@gmail.com',
    //       pass: process.env.googlepass
    //     }
    //     })

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: 'davethsite@gmail.com',
          pass: process.env.googlepass
        },
        tls: {
          rejectUnauthorized: false,
        }
      });
      
        // Construct the URL using the URL constructor to handle slashes
    const baseUrl = new URL(process.env.domain);
    const verifyUrl = new URL("/verifyemail", baseUrl);
    verifyUrl.searchParams.set("token", hashToken);

    const mailOptions = {
      from: "davethsite@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>
                Click <a href="${verifyUrl.href}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
            </p>`,
    };

          const mailresponse =  await transporter.sendMail(mailOptions)
          return mailresponse

    } catch  (error:any){
        // throw new Error(error.message)
        console.log(error.message)
    }
}