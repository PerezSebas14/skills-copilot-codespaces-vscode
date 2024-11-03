// Create web server
// Use the express library
// Use the body-parser library
// Use the method-override library
// Use the path library
// Use the express-sanitizer library
// Use the mongoose library
// Use the express-session library
// Use the connect-flash library
// Use the passport library
// Use the passport-local library
// Use the passport-local-mongoose library
// Use the async library
// Use the multer library
// Use the fs library
// Use the moment library
// Use the nodemailer library
// Use the crypto library
// Use the request library
const express = require('express'),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override'),
      path = require('path'),
      expressSanitizer = require('express-sanitizer'),
      mongoose = require('mongoose'),
      session = require('express-session'),
      flash = require('connect-flash'),
      passport = require('passport'),
      LocalStrategy = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose'),
      async = require('async'),
      multer = require('multer'),
      fs = require('fs'),
      moment = require('moment'),
      nodemailer = require('nodemailer'),
      crypto = require('crypto'),
      request = require('request');

// Use the Comment model
const Comment = require('../models/comment'),
      User = require('../models/user'),
      Post = require('../models/post');

// Create a router
const router = express.