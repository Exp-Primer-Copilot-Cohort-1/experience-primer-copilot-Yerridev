//Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
var comments = require('./comments.json');
var _ = require('lodash');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//GET /comments
app.get('/comments', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(comments));
});