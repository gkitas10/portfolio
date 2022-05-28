export default async function (req, res) {
  require('dotenv').config()
  
  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'portfoliomail10@gmail.com',
        pass: process.env.password,
      },
      secure: true,
    })

    console.log(req.body.useremailaddress);
    const mailData = {
      from: 'portfoliomail10@gmail.com',
      to: 'gkitas10@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.useremailaddress,
      html: `<div>${req.body.message}</div><p>Sent from:${req.body.useremailaddress}</p>`
    }
    
    await transporter.sendMail(mailData)
  
    res.status(200)  
}

