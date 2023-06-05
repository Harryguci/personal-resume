const path = require("path");
const db = require(path.join(
  __dirname,
  "..",
  "..",
  "config",
  "db",
  "StoreMessage"
));
class MessageController {
  // [post] /message
  send = async (req, res) => {
    // handle form information
    // store into db
    await db.store(req.body);
    res.send(
      `<script>alert("Send successfully. Have a nice day !!"); window.location.href = "/"; </script>`
    );
  };
}

module.exports = new MessageController();
