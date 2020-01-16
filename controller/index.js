const Idea = require('../models/Idea')

exports.showLandingPage =  (req, res) => {            
// res.send('hello frm route/index')
res.render('index', {name:'Niraj'})
}


/*
exports.helo= 'hello'
}
*/
exports.postIdea = (req, res) => {
  //  res.send(req.body.title)
    //  res.send(req.body.title,req.body.description) not valid , and two 
   // console.log('hello')

   if (req.body.title !== "" && req.body.discription !== "") {
    const newIdea = new Idea({
        title: req.body.title,
        description: req.body.description
    })  
    //Return newIdea.save().then(saveIdea=>rews.send(sendIdea))
    return newIdea.save().then(res.redirect('/'))

   }
res.send('title or description is empty');
//res.send
}
exports.getIdeas = (req, res) => {
    Idea.find({}).then(ideas=> res.render('ideas', {ideas:ideas}))
}

exports.getEditForm = (req, res) => {
    Idea.findById(req.params.id).then(idea=>{
        res.render('edit', {idea})
    })
}

exports.editIdea = (req, res) => {
    Idea.findById(req.params.id).then(idea=>{

        if (req.body.title !== "" && req.body.discription !== "") {
           idea.title = req.body.title,
           idea.description = req.body.description
           idea.save().then(res.redirect('/ideas'))
    
            }  
            
        })
       
       
}

exports.deleteIdea =(req, res) => {
    Idea.findByIdAndRemove(req.params.id).then(idea=>
res.redirect('/ideas'))
}