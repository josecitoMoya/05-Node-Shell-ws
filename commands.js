const fs = require("fs");

module.exports = {
  pwd: function () {
    process.stdout.write("pwd is " + process.argv);
    process.stdout.write("\nprompt > ");
  },

  date: function () {
    process.stdout.write("date is " + Date());
    process.stdout.write("\nprompt > ");
  },

  else: function (cmd) {
    process.stdout.write("you typed " + cmd);
    process.stdout.write("\nprompt > ");
  },

  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;

      files.forEach(function (file) {
        process.stdout.write("ls is " + file.toString() + "\n");
      });

      process.stdout.write("\nprompt > ");
    });
  },

  echo: function (fn, cmd) {
    function fn() {
      process.stdout.write("you typed " + cmd);
    }
  },
};
