// initialize express and body-parser
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files from public
app.use(express.static("public"));

app.post("/calculate", (req, res) => {
  // get the data from the request body
  const { num1, num2, operation } = req.body;
  res.send({ result: calculate(Number(num1), Number(num2), operation) });
});

// calculate function
function calculate(num1, num2, operator) {
  let result = 0;
  switch (operator) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    default:
      result = 0;
  }
  return result;
}

// start server, either at 3000 or the environment variable PORT
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
