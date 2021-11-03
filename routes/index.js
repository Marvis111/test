const indexContoller = require('../controllers/indexController')
const Router = app =>{
    app.get('/',indexContoller.home);
}
module.exports = Router