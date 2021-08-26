const emailConfig = require("../configs/mailgunConfig")();
const mailgun = require("mailgun-js")(emailConfig);

exports.emailConfirmation = (recipient, name, token) => {
  const url = `localhost:5000/user/emailconfirmation/${token}`;

  const data = {
    from: "LMCS Nig. Ltd. <noreply@lmcsnigltd.org.ng>",
    to: recipient,
    subject: "Verify your email address",
    html: `<body
    itemscope
    itemtype="http://schema.org/EmailMessage"
    style="
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      box-sizing: border-box;
      font-size: 14px;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: none;
      width: 100% !important;
      height: 100%;
      line-height: 1.6em;
      background-color: #f6f6f6;
      margin: 0;
    "
    bgcolor="#f6f6f6"
  >
    <table
      class="body-wrap"
      style="
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        box-sizing: border-box;
        font-size: 14px;
        width: 100%;
        background-color: #f6f6f6;
        margin: 0;
      "
      bgcolor="#096C3A"
    >
      <tr
        style="
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          box-sizing: border-box;
          font-size: 14px;
          margin: 0;
        "
      >
        <td
          style="
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            box-sizing: border-box;
            font-size: 14px;
            vertical-align: top;
            margin: 0;
          "
          valign="top"
        ></td>
        <td
          class="container"
          width="600"
          style="
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            box-sizing: border-box;
            font-size: 14px;
            vertical-align: top;
            display: block !important;
            max-width: 600px !important;
            clear: both !important;
            margin: 0 auto;
          "
          valign="top"
        >
          <div
            class="content"
            style="
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              box-sizing: border-box;
              font-size: 14px;
              max-width: 600px;
              display: block;
              margin: 0 auto;
              padding: 20px;
            "
          >
            <table
              class="main"
              width="100%"
              cellpadding="0"
              cellspacing="0"
              style="
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                box-sizing: border-box;
                font-size: 14px;
                border-radius: 3px;
                background-color: #fff;
                margin: 0;
                border: 1px solid #e9e9e9;
              "
              bgcolor="#fff"
            >
              <tr
                style="
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                  box-sizing: border-box;
                  font-size: 14px;
                  margin: 0;
                "
              >
                <td
                  class="alert alert-warning"
                  style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    box-sizing: border-box;
                    font-size: 16px;
                    vertical-align: top;
                    color: #fff;
                    font-weight: 500;
                    text-align: center;
                    border-radius: 3px 3px 0 0;
                    background-color: #096c3a;
                    margin: 0;
                    padding: 20px;
                  "
                  align="center"
                  bgcolor="#FF9F00"
                  valign="top"
                >
                  please confirm your email.
                </td>
              </tr>
              <tr
                style="
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                  box-sizing: border-box;
                  font-size: 14px;
                  margin: 0;
                "
              >
                <td
                  class="content-wrap"
                  style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    box-sizing: border-box;
                    font-size: 14px;
                    vertical-align: top;
                    margin: 0;
                    padding: 20px;
                  "
                  valign="top"
                >
                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      font-family: 'Helvetica Neue', Helvetica, Arial,
                        sans-serif;
                      box-sizing: border-box;
                      font-size: 14px;
                      margin: 0;
                    "
                  >
                    <tr
                      style="
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    >
                      <td
                        class="content-block"
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          vertical-align: top;
                          margin: 0;
                          padding: 0 0 20px;
                        "
                        valign="top"
                      >
                        Hi
                        <strong
                          style="
                            font-family: 'Helvetica Neue', Helvetica, Arial,
                              sans-serif;
                            box-sizing: border-box;
                            font-size: 14px;
                            margin: 0;
                          "
                          > ${name}</strong
                        >.
                      </td>
                    </tr>
                    <tr
                      style="
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    >
                      <td
                        class="content-block"
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          vertical-align: top;
                          margin: 0;
                          padding: 0 0 20px;
                        "
                        valign="top"
                      >
                        your account have been created, please verify your email
                        by clicking on the button below
                      </td>
                    </tr>
                    <tr
                      style="
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    >
                      <td
                        class="content-block"
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          vertical-align: top;
                          margin: 0;
                          padding: 0 0 20px;
                        "
                        valign="top"
                      >
                        <a
                          href=${url}
                          class="btn-primary"
                          style="
                            font-family: 'Helvetica Neue', Helvetica, Arial,
                              sans-serif;
                            box-sizing: border-box;
                            font-size: 14px;
                            color: #fff;
                            text-decoration: none;
                            line-height: 2em;
                            font-weight: bold;
                            text-align: center;
                            cursor: pointer;
                            display: inline-block;
                            border-radius: 5px;
                            text-transform: capitalize;
                            background-color: #348eda;
                            margin: 0;
                            border-color: #348eda;
                            border-style: solid;
                            border-width: 10px 20px;
                          "
                          ><button>confirm email</button></a
                        >
                      </td>
                    </tr>
                    <tr
                      style="
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      "
                    >
                      <td
                        class="content-block"
                        style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          vertical-align: top;
                          margin: 0;
                          padding: 0 0 20px;
                        "
                        valign="top"
                      >
                        Thanks for choosing LMCS Nig Ltd.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <div
              class="footer"
              style="
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                box-sizing: border-box;
                font-size: 14px;
                width: 100%;
                clear: both;
                color: #999;
                margin: 0;
                padding: 20px;
              "
            >
              <table
                width="100%"
                style="
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                  box-sizing: border-box;
                  font-size: 14px;
                  margin: 0;
                "
              >
                <tr
                  style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    box-sizing: border-box;
                    font-size: 14px;
                    margin: 0;
                  "
                >
                  <td
                    class="aligncenter content-block"
                    style="
                      font-family: 'Helvetica Neue', Helvetica, Arial,
                        sans-serif;
                      box-sizing: border-box;
                      font-size: 12px;
                      vertical-align: top;
                      color: #999;
                      text-align: center;
                      margin: 0;
                      padding: 0 0 20px;
                    "
                    align="center"
                    valign="top"
                  >
                    <a
                      href="http://www.mailgun.com"
                      style="
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        box-sizing: border-box;
                        font-size: 12px;
                        color: #999;
                        text-decoration: underline;
                        margin: 0;
                      "
                      >Unsubscribe</a
                    >
                    from these alerts.
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </td>
        <td
          style="
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            box-sizing: border-box;
            font-size: 14px;
            vertical-align: top;
            margin: 0;
          "
          valign="top"
        ></td>
      </tr>
    </table>
  </body>
      `,
  };

  mailgun.messages().send(data, (error, body) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log(body);
  });
};
