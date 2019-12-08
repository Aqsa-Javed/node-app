const express = require('express');
var router = express.Router();
 
var { Tasks } = require('./tasks');

router.get('/get', (req, res) => {
    Tasks.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Tasks getting ') };  });
});
 
router.post('/post', (req, res) => {
   var tas = new Tasks();  
   tas.task = req.body.task;    
   console.log(tas.task)
    tas.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Tasks posting ') };  });
});

router.put('/:id', (req, res) => {
    var tas = {
       task: req.body.task,
  };
    Tasks.findByIdAndUpdate(req.params.id, { $set: tas }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Tasks Update ') };
    });
});

router.delete('/:id', (req, res) => {
    Tasks.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Tasks deleting ') };  });
});

 module.exports = router;