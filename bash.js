const commands = require("./commands.js");

function done(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

// Un prompt como output
process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let parameters = data.toString().trim(); // Remueve la nueva línea.
  parameters = parameters.split(" ");

  const cmd = parameters[0];

  if (parameters.length > 1) parameters.shift();

  commands[cmd](parameters, done);
});
