const express = require("express");
const app = express();
const port = process.env.PORT || 80;
const mongoose = require("mongoose");
const routes = require("./route");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const config = require("./config");
const attachUserObject = require("./middleware/attachUserObject.js");
const databaseURL = process.env.MONGO_URL || "https://storefront.com";
(async () => {
  await mongoose.connect(databaseURL, {
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
  app.use(attachUserObject);
  app.use(routes);
  app.listen(port, () => {
    console.log("Listening to " + port);
  });
})();