var nodeMirror = require("../lib/nodeMirror.js");
var argv = require("optimist").argv;

nodeMirror.startServer({
  port: argv.port ? argv.port : 3000
  , dir: argv.dir ? argv.dir : process.cwd()
});