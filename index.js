var rl = require("readline")
var ask = require("inquirer")
var w = require('chalk')
var w2 = require('colors')
var req = require('request')
var f = require('fs')
var wm = require("jsome")
var y = require("yosay")

console.log(y("Where The Directory ?"))

wm({
    Coder: "Fajar Firdaus",
    Github: "FajarTheGGman",
    Instagram: "FajarTheGGman"
})

ask.prompt({
    type: "input",
    name: "web",
    message: "Please Input Web : "
}).then(data => {
    const d = rl.createInterface({
        input: f.createReadStream('./wordlist/dicc.txt')
    })
    
    d.on("line", (baris) => {
        req("https://" + data.web + "/" + `${baris}`, function(error,response,body){
            if(response.statusCode == 200){
                console.log(w.bgGreen("[+] " + `${baris}` + " -> Found !") + w2.rainbow(" [200 OK]"))
            }else{
                console.log(w.bgRed("[-] " + `${baris}` + " -> Not Found !") + w2.red(' [Not Found]'))
            }
        })
    })
})