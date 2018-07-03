const express = require('express');
const app = express();
const router = express.Router();
const todos = require('./todos');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo')
  .then(() => console.log('mongodb has started'))
  .catch(err => console.log(err));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('we are connected!');
});

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/todo', todos.getAll);
app.get('/todo/:id', todos.getTodo)
app.post('/todo', todos.addTodo);
app.delete('/todo/:id', todos.removeTodo);
app.put('/todo/:id', todos.markDone);
app.post('/todo/:id', todos.markUndone);
app.get('*', function() {
  res.send('unvalid page')
})

app.listen(5500, ()=>console.log('server listening on 5500 port'))
