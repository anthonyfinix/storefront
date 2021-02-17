const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./route");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const config = require("./config");
const authentication = require("./middleware/authenticate");
(async () => {
  await mongoose.connect("mongodb://localhost/storefront", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  app.use(
    session({
      secret: config.cookie_secret,
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: config.cookie_maxAge, httpOnly: true },
      store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
  );
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(authentication);
  app.use(routes);
  app.listen(8080, () => {
    console.log("Listening to 8080");
  });
})();
