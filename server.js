const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const path = require('path')
const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))


server.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hudojnik.1993@gmail.com',
        pass: 'tamerlan93'
      }
    })

    let mailOptions = {
      from: req.body.email,
      to: 'hudojnik.1993@gmail.com',
      replyTo: req.body.email,
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }

      console.log('Message sent %s', info.message)
      console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
    })
  })
  res.json('success')

})



// if (process.env.NODE_ENV === 'production') {
//
//   server.use(express.static('client/build'));
//   server.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
//   });
// }









const favicon = require('serve-favicon')
if (process.env.NODE_ENV === 'production') {

  server.use(express.static('client/build'));
  server.use(favicon(__dirname+'/client/build/favicon.ico'))
  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
}










const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
