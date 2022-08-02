const http = require("http")

const server = http.createServer(function (req, res){
  res.writeHead(302, {
    location: "https://expensa.io",
  })
  res.end()
})

server.listen(process.env.PORT, function (){
  console.log("Server started")
})
