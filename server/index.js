const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));


const messageCtrl = require('./controllers/messages_controller');
const apiURL = '/api/messages';

app.get(`${apiURL}`, messageCtrl.read);
app.post(`${apiURL}`, messageCtrl.create);
app.put(`${apiURL}/:id`, messageCtrl.update);
app.delete(`${apiURL}/:id`, messageCtrl.delete);

const port = 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));