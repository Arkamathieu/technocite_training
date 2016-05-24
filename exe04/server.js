const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const root=process.cwd(); // donne moi le chemin actuel/absolu de là où on l'execute
app.engine('hbs', exphbs({defaultLayout : 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.get('/', function (req, res){
	res.render('home');
});
app.get('/page', function (req, res){
	res.render('page1',{layout:'pages'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});