const emailConfig = require("../configs/mailgunConfig")();
const mailgun = require("mailgun-js")(emailConfig);

exports.emailConfirmation = (recipient, name, token) => {
  const data = {
    from: "LMCS Nig. Ltd. <lmcsnigltd@gmail.com>",
    to: recipient,
    subject: "Verify your email address",
    html: `<h1> Please confirm your email account</h1>
            <h2> hello ${name}</h2>
            <p> your account has being created</p>
            <p>verify your email</p> 
            <button>
            <a href=http://localhost:5000/emailconfirmation/${token}</a></button>
      `,
  };

  mailgun.messages().send(data, (error, body) => {
    if (error) {
      return error;
    }
    console.log(body);
  });
};
