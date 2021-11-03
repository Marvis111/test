
module.exports = {
    home:(req,res) =>{
        res.render('index',{title:'Home page..'})
    },
    login:(req,res)=>{
        res.render('login',{title:"login page is ready"})
    }
}