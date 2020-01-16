const Router = require('express').Router()      //dot operator use to assign
const {showLandingPage, postIdea, getIdeas, getEditForm, editIdea, deleteIdea} = require('../controller')
// const ctr = require('../controller')
// console.log(ctr.helo)
//Router.get('/', ctr.showLandingPage)
Router.get('/', showLandingPage)
Router.post('/postIdea', postIdea)

Router.get('/ideas', getIdeas)
Router.get('/editForm/:id', getEditForm)
Router.put('/editIdea/:id', editIdea)
Router.get('/deleteIdea/:id', deleteIdea)

//const a =23;
module.exports = Router;                //export router
