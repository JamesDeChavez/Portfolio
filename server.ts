import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();
const SERVICE_ID = process.env.SERVICE_ID
const TEMPLATE_ID = process.env.TEMPLATE_ID
const EMAILJS_PUBLIC = process.env.EMAILJS_PUBLIC
const PORT = process.env.PORT;

const app = express();

const whitelist = ['http://www.jdechavez.com', 'http://jdechavez.com', 'https://incredible-cannoli-7b0225.netlify.app', 'https://james-portfolio.onrender.com']
var corsOptions = {
  origin: function (origin: any, callback: any) {
    console.log('origin', origin)
    console.log('test', whitelist.indexOf(origin))
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

app.get('/emailjs', (_, res) => {
    res.json({
        'service': SERVICE_ID,
        'template': TEMPLATE_ID,
        'public': EMAILJS_PUBLIC
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})