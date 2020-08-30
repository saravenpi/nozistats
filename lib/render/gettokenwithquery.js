module.exports = function(app, rp, cors, bodyParser) {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/gettokenwithquery", function(req,res) {



    res.render("gettoken", {
      data: {
        traffic: req.session.traffic
      }
    });

})

  app.post("/gettokenwithquery", function(req, res) {
    console.log(req.query)
    console.log(req.query.email)
    console.log(req.query.password)
    console.log("wook");


      if (req.query.email && req.query.password) {


    console.log(req.query.password + req.query.email)


      var options = {
    body: JSON.stringify({"email": req.query.email,"password": req.query.password,"undelete":false,"captcha_key":null,"login_source":null,"gift_code_sku_id":null, "captcha_key": null}),
    headers: {
    "Content-Type": "application/json",
    "x-fingerprint": "715952977180885042.yskHI7mK4iZWhTX7iXlXIcDovRc",
    "x-super-properties" :Buffer.from(JSON.stringify({"os":"Windows","browser":"Chrome","device":"","browser_user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36","browser_version":"83.0.4103.61","os_version":"10","referring_domain":"discord.com","referrer_current":"","referring_domain_current":"","release_channel":"stable","client_build_number":60856,"client_event_source":null}), "utf-8").toString("base64"),

    cookie: "__cfduid=d638ccef388c4ca5a94c97c547c7f0d9e1598555308; __cfruid=4d17c1a957fba3c0a08c74ea83114af675f7ef19-1598796039;"
     },
    method: "POST",
    uri: "https://discord.com/api/v8/auth/login"
    }


      rp(options).then(function (body) {
        var tmtc = JSON.parse(body);
        console.log(tmtc.token);
        res.send(tmtc.token);
      });

         } else {

           console.log("no email-password")
           console.log(req.query.email)
           console.log(req.query.password)
           res.send("this api has been made by saravenpi")
         }


  });
};
