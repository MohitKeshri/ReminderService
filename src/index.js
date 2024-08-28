const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const jobs = require("./utils/job");

//const { sendBasicEmail } = require("./services/email-service");
const TicketController = require("./controller/ticket-controller");

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);

  app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
    jobs();
    // sendBasicEmail(
    //   "support@admin.com",
    //   "mohitkeshri069@gmail.com",
    //   "This is a testing email",
    //   "Hey ,how are you ?"
    // );
  });
};

setupAndStartServer();
