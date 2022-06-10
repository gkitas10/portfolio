export default async function Contact (req, res) {
  // require('dotenv').config()
  
  let nodemailer = require('nodemailer')

  // const transporter = nodemailer.createTransport({
  //     port: 465,
  //     host: "smtp.gmail.com",
  //     auth: {
  //       user: 'portfoliomail10@gmail.com',
  //       pass: process.env.password,
  //     },
  //     secure: true,
  //   })

    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com", // hostname
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      tls: {
         ciphers:'SSLv3'
      },
      auth: {
          user: 'portfolioburner@hotmail.com',
          pass: process.env.password
      }
  });

    const mailData = {
      from: 'portfolioburner@hotmail.com',
      to: 'gkitas10@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.useremailaddress,
      html: `<div>${req.body.message}</div><p>Sent from:${req.body.useremailaddress}</p>`
    }

    try {
      await transporter.sendMail(mailData)
      res.status(200)  
    } catch (error) {
      console.log('errr',error);
    }
}



