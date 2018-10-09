var express = require('express');
var itemsList = require("../models/ItemDB.js");
var app= express();
app.set('view engine','ejs');

app.use('/resources',express.static('resources'));

app.get('/',function (req,res) {
  res.render('../views/index');
});

app.get('/index',function (req,res) {
  res.render('../views/index');
});

app.get('/myItems',function (req,res) {
  res.render('../views/myItems');
});

app.get('/categories',function (req,res) {
  categoryList=itemsList.getCategoryList();
  res.render('../views/categories',{itemsList:itemsList.getItems(),categoryList:categoryList});
});

app.get('/categories/:catalogCategory',function (req,res) {
  var categoryList=[];
  if(typeof req.params.catalogCategory === 'undefined'){
    categoryList=itemsList.getCategoryList();
  }else{
    if(itemsList.getCategoryList().includes(req.params.catalogCategory)){
      categoryList.push(req.params.catalogCategory);
    }else{
      res.redirect('/categories');
      return;
    }
  }
  console.log("categoryList::"+categoryList);
  res.render('../views/categories',{itemsList:itemsList.getItems(), categoryList:categoryList});
});

app.get('/item/:itemCode',function (req,res) {

  var itemDetail= itemsList.getItem(req.params.itemCode);
  if(typeof itemDetail=== "undefined" ){
    //  res.render('../views/categories',{itemsList:itemsList.getItems(), categoryList:itemsList.getCategoryList()});
    res.redirect('/categories');
  }else{
    res.render('../views/item', {item:itemDetail});
  }
});

app.get('/item',function (req,res) {
  res.redirect('/categories');
});

app.get('/contact',function (req,res) {
  res.render('../views/contact');
});
app.get('/about',function (req,res) {
  res.render('../views/about');
});

app.get('/item/swap/:itemCode',function (req,res) {
  var itemDetail= itemsList.getItem(req.params.itemCode);
  if(typeof itemDetail=== "undefined"){
    //  res.render('../views/categories',{itemsList:itemsList.getItems(), categoryList:itemsList.getCategoryList()});
    res.redirect('/categories');
  }else{
    res.render('../views/swap', {item:itemDetail});
  }
});

app.get('/mySwaps',function (req,res) {
  res.render('../views/mySwaps');
});
app.get('/check',function (req,res) {

  res.send(itemsList.getItem(01));
});
/*
app.get('/',function (req,res) {
console.log("Query::"+req.query.firstName);
if(req.query.firstName=== undefined||req.query.lastName=== undefined||
req.query.degree===undefined||req.query.program===undefined){
res.send("No information available or requested");
}else{
var s = new student(req.query.firstName,req.query.lastName,req.query.degree,req.query.program);
console.log(s.getFirstName());
res.render('../views/main',{stFirstName:s.getFirstName(),stLasttName:s.getLastName(),
stDegree:s.getDegree(),stProgram:s.getProgram()});
}
});*/

app.get('/*',function (req,res) {

  res.send('No Page Find..May be wrong URL');
}
);

app.listen(8080);
