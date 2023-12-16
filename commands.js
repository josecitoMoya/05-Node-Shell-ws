const fs = require("fs");
const request = require("request");

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

  echo: function (args, done) {
    let response = "";
    args.forEach((arg) => {
      let command = arg.slice(1);
      if (process.env[command]) {
        response = process.env[command];
      } else {
        response += `${arg} `;
      }
    });
    done(response);
  },
  cat: function (args, done) {
    fs.readFile(`./${args}`, function read(err, data) {
      if (err) throw err;
      done(data);
    });
  },

  head: function (args, done) {
    fs.readFile(`./${args}`, "utf-8", function (err, data) {
      if (err) throw err;

      let lines = data.split("\n");
      let size = 5;
      let response = "";
      response = lines.slice(0, size).join("\n");

      done(response);
    });
  },

  tail: function (args, done) {
    fs.readFile(`./${args}`, "utf-8", function (err, data) {
      if (err) throw err;

      let lines = data.split("\n");
      let size = 5;
      let response = "";
      lines.slice(lines.length - size, lines.length).map((line) => {
        response += `${line}\n`;
      });

      done(response);
    });
  },

  curl: function (args, done) {
    request(args.toString(), (err, response, body) => {
      if (err) throw err;
      done(body);
    });
  },
};
