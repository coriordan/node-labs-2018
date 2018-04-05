import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import contactsRouter from './api/contacts';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/contacts', contactsRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

