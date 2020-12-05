const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const cors = require('cors');
const app = express();
const Article = require("./models/articles");
const methodOverride = require('method-override');

require('dotenv').config();
const port = process.env.PORT || 5000;


//mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true , useUnifiedTopology: true , useCreateIndex: true });
app.set('view engine', 'ejs');  

app.use(cors());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {  useNewUrlParser: true , useUnifiedTopology: true , useCreateIndex: true });
const connection = mongoose.connection;


connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  });
  

app.use(express.urlencoded({extended: false})); //we can access the different paramaters in the form in the route
app.use(methodOverride('_method'));

/* app.get('/', async (req, res)=>{
    const articles = await Article.find().sort({createdAt:'desc'});
    res.render('articles/index', {articles: articles});
}) 


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

*/

app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/about', (req, res)=>{
    res.render('about');
});


app.use('/articles' ,articleRouter); //refers to the articles file in routes


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});
