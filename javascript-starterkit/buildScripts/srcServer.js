import express from 'express';
import path from 'path';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import config from '../webpack.config';


const port = 3000;
const app = express();
const compiler = webpack(config);


const instance = middleware(compiler,{
  publicPath: config.output.path
});

app.use(instance)
app.use(express.static('dist'));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(port, function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Server running on port" + port);
  }
})
