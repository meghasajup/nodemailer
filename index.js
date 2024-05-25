const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "meghasaju45@gmail.com",
        pass: "iowm ljht xtak qpkp"
    }
})

let details = {
    from: "meghasaju45@gmail.com",
    to: "abhinraj8086@gmail.com",
    subject: "Assignment Nodejs",
    text: "This is send through nodemailer by Megha Saju P, meghasaju45@gmail.com"
}

mailTransporter.sendMail(details, (err) => {
    if(err){
        console.log("It has an error", err);
    }else{
        console.log("Email has send!");
    }
})