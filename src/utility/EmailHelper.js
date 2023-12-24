/*
* Author: Md. Sholayman
* Description: This is the file that contains a helper function for sending email to client.
* Date : 25 December 2023
* */

//importing nodemailer
const nodemailer = require("nodemailer");

const emailSend =async(email,emailSub,emailText)=>{

    //nodemailer email settings
    const transport = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth: {user: "info@teamrabbil.com", pass: '~sR4[bhaC[Qs'},
        tls: {rejectUnauthorized: false}
    });

    //an object for email option.Basically these are  information for a client.
    const emailOption = {
        from:"Mern Ecommerce Solution <info@teamrabbil.com>",
        to:email,
        sub:emailSub,
        text:emailText

    }

    await transport.sendMail(emailOption);

}

module.exports = emailSend ;
