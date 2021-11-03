const express = require('express'),
ejs = require('ejs'),
app = express(),

Router = require('./routes/index');

app.set('view engine','ejs');
app.set('port',process.env.PORT | 8000);
app.use(express.static('public'));

Router(app);

app.listen(app.get('port'),()=>{
    console.log('server running on '+app.get('port'));
})