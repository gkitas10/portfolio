export default function (req, res) {
    console.log(req.body);
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'demo email',
          pass: process.env.password,
        },
        secure: true,
      })

      const mailData = {
        from: 'demo email',
        to: 'gkitas10@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
      }
    
}