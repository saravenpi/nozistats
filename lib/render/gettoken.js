module.exports = function(app, rp, cors, bodyParser) {
  app.use(cors())
  app.use(bodyParser.json());



  app.post("/gettoken", function(req, res) {
    console.log(req.body)
    console.log(req.body.email)
    console.log(req.body.password)
    console.log("wook");


      if (req.body.email && req.body.password) {


    console.log(req.body.password + req.body.email)


      var options = {
    body: JSON.stringify({"email": req.body.email,"password": req.body.password,"undelete":false,"captcha_key":null,"login_source":null,"gift_code_sku_id":null}),
    headers: {
    "Content-Type": "application/json",
    "x-fingerprint": "715952977180885042.yskHI7mK4iZWhTX7iXlXIcDovRc",
    "x-super-properties" :Buffer.from(JSON.stringify({"os":"Windows","browser":"Chrome","device":"","browser_user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36","browser_version":"83.0.4103.61","os_version":"10","referring_domain":"discord.com","referrer_current":"","referring_domain_current":"","release_channel":"stable","client_build_number":60856,"client_event_source":null}), "utf-8").toString("base64"),
    cookie: '__cfduid=dc77feb34827e971e68fa57f74fe1de341590704651; _ga=GA1.2.692715498.1590766436; _gid=GA1.2.1291560279.1590766436; _gat_UA-53577205-2=1; locale=fr; __cfruid=817e57689e26626894495819624bd927cedb34b4-1590766881;'
     },
    method: "POST",
    uri: "https://discord.com/api/v6/auth/login"
    }


      rp(options).then(function (body) {
        var tmtc = JSON.parse(body);
        console.log(tmtc.token);
        res.send(tmtc.token);
      });

         } else {

           console.log("no email-password")
           console.log(req.body.email)
           console.log(req.body.password)
           res.send("this api has been made by saravenpi")
         }


  });
};