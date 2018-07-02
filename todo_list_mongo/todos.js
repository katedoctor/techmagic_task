const Todo = require('./schema/todo');

exports.getAll = function(req, res) {
  Todo.find().then(todo => {
    res.send(todo)
  }).catch(err => {
    res.send(err)
  })
}

exports.addTodo = function(req, res) {
  const todo = new Todo({
    name: req.body.name,
    done: false ,
  });
    if (!req.body.name) {
    return res.status(400).send('data is required')
  } else {
    todo.save()
      .then(task => {
        res.send(task)
      }).catch(err => {
        res.send({
          message: err.message
        }).status(500)
      })
    }
}

exports.removeTodo = function(req, res) {
  Todo.findByIdAndRemove({
    _id: req.params.id
  })
    .then(todo => {
      res.send(todo + ' todo was deleted')
    }).catch(err => {
      res.send({
        message: 'not found'
      }).status(500);
      if(err.kind === 'ObjectId'){
        return res.status(404).send({
          message: `todo ${req.params.id} not found `
        })
      }
    })
}

exports.getTodo = function(req, res) {
  Todo.findById({
    _id: req.params.id
  })
    .then(todo => res.json(todo))
      .catch(err => {
        res.send({
          message: `not found` + err
        }).status(500)
      })
}

exports.markDone = function(req, res, next) {
  Todo.findByIdAndUpdate({
    _id: req.params.id
  }, { $set : {
    done: true
    }
  }).then(todo=> res.json(todo))
      .catch(err => {
        res.send(err).status(500)
      })
}
exports.markUndone = function (req, res, next) {
  Todo.findByIdAndUpdate({
    _id: req.params.id
  }, {
    $set: {
      done: false
    }
    }).then(todo => res.json(todo))
    .catch(err => {
      res.send(err).status(500)
    })
}

