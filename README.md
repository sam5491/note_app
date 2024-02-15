# INTRODUCTION TO NODE
HELP TO RUN JS OUTSIDE A BROWSER
# Importance of node
- allows to create servers
- allows you to create mobile app
- allows to create latforms based on server side
- uses asynchronous programming nature (`async -----await`)

# NPM (Node Package Manager)
 HELP TO RUN YOUR SCRIPTS AND AS WELL MANAGE YOUR DEPENDENCIES(modules ie: node_modules)
 #  Node Modules
 These are package that help us to do certain functionalities without write the source codes. they are different tyes
  *Built in modules: used without imorting them
  *Installed modules: installed from the node community(nmjs)
  * custom modules these are modules that we create ourselves

  # initialize node
  `npm init`

  # json format
  {
    "name":"Samuel"
    "position":"senior soft dev"
  }
  # Object syntax for js files
  {
    name="Samuel"
    position:"senior soft dev"
  }
  ## Important Modules to install in a node project
  * Express: This is a node modules helps in availing node functionalities like listening a server/port, creating routes (end-points), using the endpoints, methods(post,get,put/patch,delete) and establishing headers to our server

  * Nodemon: tool helps develop node.js based app by automatically restating the node app whene file changes in the directory are detected. **Note**: This is a devDependency
* dotenv

  # Installing dependencie
  `npm install name_of_pkg or npm i name_of_pkg`
  To specify that you want to install a devDependency you put after the command a flag of `-D` e.g: `nodemon i -D`
  ## How to run a node script
  `npm run name_of_the_script`

  ## COMPONENT OF SERVER
  The minimum components are:
  1. IP
  2. PORT
  3. ENDPOINT(Routes)

# CORS(Cross Origin Resource Sharing)
is a type of header that allows server to indicate any origins(domain,scheme or port)