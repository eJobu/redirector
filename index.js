const http = require("http")

const server = http.createServer(function (req, res){
  if(req.headers.host.includes('mobile.expensa.io')){
    res.writeHead(302, {
      location: "https://bit.ly/m/expensa",
    })
    res.end()
  }
  res.writeHead(302, {
    location: "https://expensa.io",
  })
  res.end()
})

server.listen(process.env.PORT, function (){
  console.log("Server started", {port: process.env.PORT})
})
