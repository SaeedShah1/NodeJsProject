const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 7000

// create server
const server = http.createServer((req,resp)=>{
let path = url.parse(req.url).path
if(path.includes("/")){
let homePage = fs.readFileSync("./Views/Home.html")

resp.write(homePage)
resp.end

}else{
   resp.write("<b>Page not found</b>")
}

})





server.listen(port)
console.log(`App is listening on port : ${port}`)

