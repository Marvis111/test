const indexContoller = require('../controllers/indexController')
const Router = app =>{
    app.get('/',indexContoller.home);
    app.get('/login',indexContoller.login);
}
module.exports = Router