const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const routes = require("./route");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const config = require("./config");
const attachUserObject = require("./middleware/attachUserObject.js");
const databaseURL = process.env.MONGO_URL || "https://storefront.com";
const headers = require("./middleware/headers");
(async () => {
  try {
    await mongoose.connect(databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (e) {
    console.log(e.message);
  }
  app.use(headers);
  app.use(cors({ origin: "http://localhost:3000" }));
  app.use(
    session({
      secret: config.cookie_secret,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: config.cookie_maxAge,
        httpOnly: config.httpOnly,
        secure: false
      },
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
