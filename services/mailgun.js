const emailConfig = require("../configs/mailgunConfig")();
const mailgun = require("mailgun-js")(emailConfig);

exports.addMemberToMailList = mailgun.lists(
  `LMCSMEMBERS@${emailConfig.domain}`
);

// exports.createMailingList = mailgun.post(
//   "/lists",
//   {
//     address: `LMCSMEMBERS@${emailConfig.domain}`,
//     description: "all members of lmcs",
//   },
//   function (error, body) {
//     console.log(body);
//   }
// );

exports.messageAllMembers = (subject, message) => {
  const data = {
    from: "LMCS Nig. Ltd. <noreply@lmcsnigltd.org.ng>",
    to: "lmcsmembers@lmcsnigltd.org.ng",
    subject: subject,
    text: message,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <!--[if gte mso 9
          ]><xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG />
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml><!
        [endif]-->
        <title>lmcs confirm email</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
        <meta name="format-detection" content="telephone=no" />
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,700,700i,900,900i"
          rel="stylesheet"
        />
        <!--<![endif]-->
        <style type="text/css">
          body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100% !important;
            -ms-text-size-adjust: 100% !important;
            -webkit-font-smoothing: antialiased !important;
          }
          img {
            border: 0 !important;
            outline: none !important;
          }
          p {
            margin: 0px !important;
            padding: 0px !important;
          }
          table {
            border-collapse: collapse;
            mso-table-lspace: 0px;
            mso-table-rspace: 0px;
          }
          td,
          a,
          span {
            border-collapse: collapse;
            mso-line-height-rule: exactly;
          }
          .ExternalClass * {
            line-height: 100%;
          }
          .em_blue a {
            text-decoration: none;
            color: #264780;
          }
          .em_grey a {
            text-decoration: none;
            color: #434343;
          }
          .em_white a {
            text-decoration: none;
            color: #ffffff;
          }
    
          @media only screen and (min-width: 481px) and (max-width: 649px) {
            .em_main_table {
              width: 100% !important;
            }
            .em_wrapper {
              width: 100% !important;
            }
            .em_hide {
              display: none !important;
            }
            .em_aside10 {
              padding: 0px 10px !important;
            }
            .em_h20 {
              height: 20px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_h10 {
              height: 10px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_aside5 {
              padding: 0px 10px !important;
            }
            .em_ptop2 {
              padding-top: 8px !important;
            }
          }
          @media only screen and (min-width: 375px) and (max-width: 480px) {
            .em_main_table {
              width: 100% !important;
            }
            .em_wrapper {
              width: 100% !important;
            }
            .em_hide {
              display: none !important;
            }
            .em_aside10 {
              padding: 0px 10px !important;
            }
            .em_aside5 {
              padding: 0px 8px !important;
            }
            .em_h20 {
              height: 20px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_h10 {
              height: 10px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_font_11 {
              font-size: 12px !important;
            }
            .em_font_22 {
              font-size: 22px !important;
              line-height: 25px !important;
            }
            .em_w5 {
              width: 7px !important;
            }
            .em_w150 {
              width: auto !important;
              height: auto !important;
            }
            .em_ptop2 {
              padding-top: 8px !important;
            }
            u + .em_body .em_full_wrap {
              width: 100% !important;
              width: 100vw !important;
            }
          }
          @media only screen and (max-width: 374px) {
            .em_main_table {
              width: 100% !important;
            }
            .em_wrapper {
              width: 100% !important;
            }
            .em_hide {
              display: none !important;
            }
            .em_aside10 {
              padding: 0px 10px !important;
            }
            .em_aside5 {
              padding: 0px 8px !important;
            }
            .em_h20 {
              height: 20px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_h10 {
              height: 10px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_font_11 {
              font-size: 11px !important;
            }
            .em_font_22 {
              font-size: 22px !important;
              line-height: 25px !important;
            }
            .em_w5 {
              width: 5px !important;
            }
            .em_w150 {
              width: auto !important;
              height: auto !important;
            }
            .em_ptop2 {
              padding-top: 8px !important;
            }
            u + .em_body .em_full_wrap {
              width: 100% !important;
              width: 100vw !important;
            }
          }
        </style>
      </head>
      <body
        class="em_body"
        style="margin: 0px auto; padding: 0px"
        bgcolor="#efefef"
      >
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="em_full_wrap"
          align="center"
          bgcolor="#efefef"
        >
          <tr>
            <td align="center" valign="top">
              <table
                align="center"
                width="650"
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="em_main_table"
                style="width: 650px; table-layout: fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px"
                    class="em_aside10"
                  >
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr>
                        <td height="25" style="height: 25px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <a href="#" target="_blank" style="text-decoration: none"
                            ><img
                              src="https://res.cloudinary.com/lmcs/image/upload/v1630055729/static/favicon-32x32_fbthbv.png"
                              width="32px"
                              height="32px"
                              alt="lmcs logo"
                              border="0"
                              style="
                                display: block;
                                font-family: Arial, sans-serif;
                                font-size: 18px;
                                line-height: 25px;
                                text-align: center;
                                color: #FFFFFF;
                                font-weight: bold;
                                max-width: 208px;
                              "
                              class="em_w150"
                            />
                            LION MULTI-PURPOSE COOPERATIVE SOCIETY NIGERIA LIMITED</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td height="28" style="height: 28px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="em_full_wrap"
          align="center"
          bgcolor="#efefef"
        >
          <tr>
            <td align="center" valign="top" class="em_aside5">
              <table
                align="center"
                width="650"
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="em_main_table"
                style="width: 650px; table-layout: fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px; background-color: #ffffff"
                    class="em_aside10"
                  >
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr>
                        <td height="45" style="height: 45px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_blue em_font_22"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 26px;
                            line-height: 29px;
                            color: #17bd4b;
                            font-weight: bold;
                          "
                        >
                          ${subject}
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="14"
                          style="height: 14px; font-size: 0px; line-height: 0px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_grey"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 16px;
                            line-height: 26px;
                            color: #434343;
                          "
                        >
                         ${message}

                        </td>
                         <tr>
               
                         </tr>
                      </tr>
                      <tr>
                        <td height="26" style="height: 26px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            width="250"
                            style="
                              width: 250px;
                              background-color: #6bafb2;
                              border-radius: 4px;
                            "
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tr>
                              <td
                                class="em_white"
                                height="42"
                                align="center"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 16px;
                                  color: #ffffff;
                                  font-weight: bold;
                                  height: 42px;
                                "
                              >
                               
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="em_full_wrap"
          align="center"
          bgcolor="#efefef"
        >
          <tr>
            <td align="center" valign="top">
              <table
                align="center"
                width="650"
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="em_main_table"
                style="width: 650px; table-layout: fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px"
                    class="em_aside10"
                  >
                    
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="16"
                          style="
                            height: 16px;
                            font-size: 1px;
                            line-height: 1px;
                            height: 16px;
                          "
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_grey"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 15px;
                            line-height: 18px;
                            color: #434343;
                            font-weight: bold;
                          "
                        >
                          Problems or questions?
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="10"
                          style="height: 10px; font-size: 1px; line-height: 1px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="center"
                          valign="top"
                          style="font-size: 0px; line-height: 0px"
                        >
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tr>
                              <td
                                class="em_grey em_font_11"
                                align="left"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 13px;
                                  line-height: 15px;
                                  color: #434343;
                                "
                              >
                                <a
                                  href="mailto:lmscnigltd@gmail.com"
                                  style="text-decoration: none; color: #434343"
                                  >lmscnigltd@gmail.com</a
                                >
                                <a
                                  href="mailto:lmscnigltd@gmail.com"
                                  style="text-decoration: none; color: #434343"
                                  >[mailto:lmscnigltd@gmail.com]</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="9"
                          style="font-size: 0px; line-height: 0px; height: 9px"
                          class="em_h10"
                        >
                          <img
                            src="/assets/pilot/images/templates/spacer.gif"
                            width="1"
                            height="1"
                            alt=""
                            border="0"
                            style="display: block"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tr>
                              <td
                                width="12"
                                align="left"
                                valign="middle"
                                style="
                                  font-size: 0px;
                                  line-height: 0px;
                                  width: 12px;
                                "
                              >
                                <a
                                  href="#"
                                  target="_blank"
                                  style="text-decoration: none"
                                  ><img
                                    src="/assets/pilot/images/templates/img_1.png"
                                    width="12"
                                    height="16"
                                    alt=""
                                    border="0"
                                    style="display: block; max-width: 12px"
                                /></a>
                              </td>
                              <td
                                width="7"
                                style="width: 7px; font-size: 0px; line-height: 0px"
                                class="em_w5"
                              >
                                &nbsp;
                              </td>
                              <td
                                class="em_grey em_font_11"
                                align="left"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 13px;
                                  line-height: 15px;
                                  color: #434343;
                                "
                              >
                                <a
                                  href="#"
                                  target="_blank"
                                  style="text-decoration: none; color: #434343"
                                  >LMCS Nig. Ltd</a
                                >
                                &bull; 012 ungel UNN &bull; Enugu, NSK 410001
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td height="35" style="height: 35px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    height="1"
                    bgcolor="#dadada"
                    style="font-size: 0px; line-height: 0px; height: 1px"
                  >
                    <img
                      src="/assets/pilot/images/templates/spacer.gif"
                      width="1"
                      height="1"
                      alt=""
                      border="0"
                      style="display: block"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px"
                    class="em_aside10"
                  >
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr>
                        <td
                          height="16"
                          style="font-size: 0px; line-height: 0px; height: 16px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="left"
                            class="em_wrapper"
                          >
                            <tr>
                              <td
                                class="em_grey"
                                align="center"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 11px;
                                  line-height: 16px;
                                  color: #434343;
                                "
                              >
                                &copy; lmscnigltd 2021 &nbsp;|&nbsp;
                                <a
                                  href="#"
                                  target="_blank"
                                  style="text-decoration: underline; color: #434343"
                                  >Unsubscribe</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="16"
                          style="font-size: 0px; line-height: 0px; height: 16px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    class="em_hide"
                    style="
                      line-height: 1px;
                      min-width: 650px;
                      background-color: #efefef;
                    "
                  >
                    <img
                      alt=""
                      src="/assets/pilot/images/templates/spacer.gif"
                      height="1"
                      width="650"
                      style="
                        max-height: 1px;
                        min-height: 1px;
                        display: block;
                        width: 650px;
                        min-width: 650px;
                      "
                      border="0"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`,
  };
  sendmessage(data);
};

exports.recieptAcknowledgement = (recipient, name, detail, memberid) => {
  const data = {
    from: "LMCS Nig. Ltd. <noreply@lmcsnigltd.org.ng>",
    to: recipient,
    subject: "Instruction Recieved",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <!--[if gte mso 9
          ]><xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG />
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml><!
        [endif]-->
        <title>reciept acknowledgement</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
        <meta name="format-detection" content="telephone=no" />
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,700,700i,900,900i"
          rel="stylesheet"
        />
        <!--<![endif]-->
        <style type="text/css">
          body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100% !important;
            -ms-text-size-adjust: 100% !important;
            -webkit-font-smoothing: antialiased !important;
          }
          img {
            border: 0 !important;
            outline: none !important;
          }
          p {
            margin: 0px !important;
            padding: 0px !important;
          }
          table {
            border-collapse: collapse;
            mso-table-lspace: 0px;
            mso-table-rspace: 0px;
          }
          td,
          a,
          span {
            border-collapse: collapse;
            mso-line-height-rule: exactly;
          }
          .ExternalClass * {
            line-height: 100%;
          }
          .em_blue a {
            text-decoration: none;
            color: #264780;
          }
          .em_grey a {
            text-decoration: none;
            color: #434343;
          }
          .em_white a {
            text-decoration: none;
            color: #ffffff;
          }
    
          @media only screen and (min-width: 481px) and (max-width: 649px) {
            .em_main_table {
              width: 100% !important;
            }
            .em_wrapper {
              width: 100% !important;
            }
            .em_hide {
              display: none !important;
            }
            .em_aside10 {
              padding: 0px 10px !important;
            }
            .em_h20 {
              height: 20px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_h10 {
              height: 10px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_aside5 {
              padding: 0px 10px !important;
            }
            .em_ptop2 {
              padding-top: 8px !important;
            }
          }
          @media only screen and (min-width: 375px) and (max-width: 480px) {
            .em_main_table {
              width: 100% !important;
            }
            .em_wrapper {
              width: 100% !important;
            }
            .em_hide {
              display: none !important;
            }
            .em_aside10 {
              padding: 0px 10px !important;
            }
            .em_aside5 {
              padding: 0px 8px !important;
            }
            .em_h20 {
              height: 20px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_h10 {
              height: 10px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_font_11 {
              font-size: 12px !important;
            }
            .em_font_22 {
              font-size: 22px !important;
              line-height: 25px !important;
            }
            .em_w5 {
              width: 7px !important;
            }
            .em_w150 {
              width: auto !important;
              height: auto !important;
            }
            .em_ptop2 {
              padding-top: 8px !important;
            }
            u + .em_body .em_full_wrap {
              width: 100% !important;
              width: 100vw !important;
            }
          }
          @media only screen and (max-width: 374px) {
            .em_main_table {
              width: 100% !important;
            }
            .em_wrapper {
              width: 100% !important;
            }
            .em_hide {
              display: none !important;
            }
            .em_aside10 {
              padding: 0px 10px !important;
            }
            .em_aside5 {
              padding: 0px 8px !important;
            }
            .em_h20 {
              height: 20px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_h10 {
              height: 10px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_font_11 {
              font-size: 11px !important;
            }
            .em_font_22 {
              font-size: 22px !important;
              line-height: 25px !important;
            }
            .em_w5 {
              width: 5px !important;
            }
            .em_w150 {
              width: auto !important;
              height: auto !important;
            }
            .em_ptop2 {
              padding-top: 8px !important;
            }
            u + .em_body .em_full_wrap {
              width: 100% !important;
              width: 100vw !important;
            }
          }
        </style>
      </head>
      <body
        class="em_body"
        style="margin: 0px auto; padding: 0px"
        bgcolor="#efefef"
      >
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="em_full_wrap"
          align="center"
          bgcolor="#efefef"
        >
          <tr>
            <td align="center" valign="top">
              <table
                align="center"
                width="650"
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="em_main_table"
                style="width: 650px; table-layout: fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px"
                    class="em_aside10"
                  >
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr>
                        <td height="25" style="height: 25px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <a href="#" target="_blank" style="text-decoration: none"
                            ><img
                              src="https://res.cloudinary.com/lmcs/image/upload/v1630055729/static/favicon-32x32_fbthbv.png"
                              width="32px"
                              height="32px"
                              alt="lmcs logo"
                              border="0"
                              style="
                                display: block;
                                font-family: Arial, sans-serif;
                                font-size: 18px;
                                line-height: 25px;
                                text-align: center;
                                color: #1d4685;
                                font-weight: bold;
                                max-width: 208px;
                              "
                              class="em_w150"
                            />
                            LION MULTI-PURPOSE COOPERATIVE SOCIETY NIGERIA LIMITED</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td height="28" style="height: 28px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="em_full_wrap"
          align="center"
          bgcolor="#efefef"
        >
          <tr>
            <td align="center" valign="top" class="em_aside5">
              <table
                align="center"
                width="650"
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="em_main_table"
                style="width: 650px; table-layout: fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px; background-color: #ffffff"
                    class="em_aside10"
                  >
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr>
                        <td height="45" style="height: 45px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_blue em_font_22"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 26px;
                            line-height: 29px;
                            color: #264780;
                            font-weight: bold;
                          "
                        >
                        Your Instructions Has been Received
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="14"
                          style="height: 14px; font-size: 0px; line-height: 0px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_grey"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 16px;
                            line-height: 26px;
                            color: #434343;
                          "
                        >
                        hello, ${name}(${memberid}) your instruction has been received:<br />

                        </td>
                         <tr>
                          <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; border:1;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 5px 0;" valign="top">
                              <table class="invoice-items" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; margin: 0;">
                                <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" valign="top">Share Capital</td>
                                <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" align="right" >NGN ${detail.shareCapitalAmount}</td>
                                <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" align="right" valign="top">${detail.shareCapitalMonths} months</td>
                                </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" valign="top">Ordinary Savings</td>
                                  <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" align="right" valign="top">NGN ${detail.ordinarySavingsAmount}</td>
                                  <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" align="right" valign="top">${detail.ordinarySavingsMonths} months</td>
                                </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" valign="top">Education Savings</td>
                                  <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" align="right" valign="top">NGN ${detail.educationSavingsAmount}</td>
                                  <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" align="right" valign="top">${detail.educationSavingsMonths} months</td>
                                </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" valign="top">Christmas Savings</td>
                                  <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" align="right" valign="top">${detail.christmasSavingsAmount}</td>
                                  <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" align="right" valign="top">${detail.christmasSavingsMonths}</td>
                                </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" valign="top">Retirement Savings</td>
                                  <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" align="right" valign="top">${detail.retirementSavingsAmount}</td>
                                  <td class="alignright" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; text-align: right; border-top-width: 1px; border-top-color: #eee; border-top-style: solid; margin: 0; padding: 5px 0;" align="right" valign="top">${detail.retirementSavingsMonths}</td>
                                </tr>
                                </tr>
                              </table>
                         </tr>
                      </tr>
                      <tr>
                        <td height="26" style="height: 26px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            width="250"
                            style="
                              width: 250px;
                              background-color: #6bafb2;
                              border-radius: 4px;
                            "
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tr>
                              <td
                                class="em_white"
                                height="42"
                                align="center"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 16px;
                                  color: #ffffff;
                                  font-weight: bold;
                                  height: 42px;
                                "
                              >
                                <a
                                  href="https://lmcsnigltd.org.ng/signin/"
                                  target="_blank"
                                  style="
                                    text-decoration: none;
                                    color: #ffffff;
                                    line-height: 42px;
                                    display: block;
                                  "
                                  >VISIT YOUR DASHBOARD</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td height="25" style="height: 25px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_grey"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 16px;
                            line-height: 26px;
                            color: #434343;
                          "
                        >
                         
                        </td>
                      </tr>
                      <tr>
                        <td height="44" style="height: 44px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="em_full_wrap"
          align="center"
          bgcolor="#efefef"
        >
          <tr>
            <td align="center" valign="top">
              <table
                align="center"
                width="650"
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="em_main_table"
                style="width: 650px; table-layout: fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px"
                    class="em_aside10"
                  >
                    
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="16"
                          style="
                            height: 16px;
                            font-size: 1px;
                            line-height: 1px;
                            height: 16px;
                          "
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_grey"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 15px;
                            line-height: 18px;
                            color: #434343;
                            font-weight: bold;
                          "
                        >
                          Problems or questions?
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="10"
                          style="height: 10px; font-size: 1px; line-height: 1px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="center"
                          valign="top"
                          style="font-size: 0px; line-height: 0px"
                        >
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tr>
                              <td
                                class="em_grey em_font_11"
                                align="left"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 13px;
                                  line-height: 15px;
                                  color: #434343;
                                "
                              >
                                <a
                                  href="mailto:lmscnigltd@gmail.com"
                                  style="text-decoration: none; color: #434343"
                                  >lmscnigltd@gmail.com</a
                                >
                                <a
                                  href="mailto:lmscnigltd@gmail.com"
                                  style="text-decoration: none; color: #434343"
                                  >[mailto:lmscnigltd@gmail.com]</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="9"
                          style="font-size: 0px; line-height: 0px; height: 9px"
                          class="em_h10"
                        >
                          <img
                            src="/assets/pilot/images/templates/spacer.gif"
                            width="1"
                            height="1"
                            alt=""
                            border="0"
                            style="display: block"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tr>
                              <td
                                width="12"
                                align="left"
                                valign="middle"
                                style="
                                  font-size: 0px;
                                  line-height: 0px;
                                  width: 12px;
                                "
                              >
                                <a
                                  href="#"
                                  target="_blank"
                                  style="text-decoration: none"
                                  ><img
                                    src="/assets/pilot/images/templates/img_1.png"
                                    width="12"
                                    height="16"
                                    alt=""
                                    border="0"
                                    style="display: block; max-width: 12px"
                                /></a>
                              </td>
                              <td
                                width="7"
                                style="width: 7px; font-size: 0px; line-height: 0px"
                                class="em_w5"
                              >
                                &nbsp;
                              </td>
                              <td
                                class="em_grey em_font_11"
                                align="left"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 13px;
                                  line-height: 15px;
                                  color: #434343;
                                "
                              >
                                <a
                                  href="#"
                                  target="_blank"
                                  style="text-decoration: none; color: #434343"
                                  >LMCS Nig. Ltd</a
                                >
                                &bull; 012 ungel UNN &bull; Enugu, NSK 410001
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td height="35" style="height: 35px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    height="1"
                    bgcolor="#dadada"
                    style="font-size: 0px; line-height: 0px; height: 1px"
                  >
                    <img
                      src="/assets/pilot/images/templates/spacer.gif"
                      width="1"
                      height="1"
                      alt=""
                      border="0"
                      style="display: block"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px"
                    class="em_aside10"
                  >
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr>
                        <td
                          height="16"
                          style="font-size: 0px; line-height: 0px; height: 16px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="left"
                            class="em_wrapper"
                          >
                            <tr>
                              <td
                                class="em_grey"
                                align="center"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 11px;
                                  line-height: 16px;
                                  color: #434343;
                                "
                              >
                                &copy; lmscnigltd 2021 &nbsp;|&nbsp;
                                <a
                                  href="#"
                                  target="_blank"
                                  style="text-decoration: underline; color: #434343"
                                  >Unsubscribe</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="16"
                          style="font-size: 0px; line-height: 0px; height: 16px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    class="em_hide"
                    style="
                      line-height: 1px;
                      min-width: 650px;
                      background-color: #efefef;
                    "
                  >
                    <img
                      alt=""
                      src="/assets/pilot/images/templates/spacer.gif"
                      height="1"
                      width="650"
                      style="
                        max-height: 1px;
                        min-height: 1px;
                        display: block;
                        width: 650px;
                        min-width: 650px;
                      "
                      border="0"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    
      `,
  };
  sendmessage(data);
};

exports.adminInvite = (recipient, name, password) => {
  const data = {
    from: "LMCS Nig. Ltd. <noreply@lmcsnigltd.org.ng>",
    to: recipient,
    subject: "Verify your email address",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <!--[if gte mso 9
          ]><xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG />
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml><!
        [endif]-->
        <title>lmcs confirm email</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
        <meta name="format-detection" content="telephone=no" />
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,700,700i,900,900i"
          rel="stylesheet"
        />
        <!--<![endif]-->
        <style type="text/css">
          body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100% !important;
            -ms-text-size-adjust: 100% !important;
            -webkit-font-smoothing: antialiased !important;
          }
          img {
            border: 0 !important;
            outline: none !important;
          }
          p {
            margin: 0px !important;
            padding: 0px !important;
          }
          table {
            border-collapse: collapse;
            mso-table-lspace: 0px;
            mso-table-rspace: 0px;
          }
          td,
          a,
          span {
            border-collapse: collapse;
            mso-line-height-rule: exactly;
          }
          .ExternalClass * {
            line-height: 100%;
          }
          .em_blue a {
            text-decoration: none;
            color: #264780;
          }
          .em_grey a {
            text-decoration: none;
            color: #434343;
          }
          .em_white a {
            text-decoration: none;
            color: #ffffff;
          }
    
          @media only screen and (min-width: 481px) and (max-width: 649px) {
            .em_main_table {
              width: 100% !important;
            }
            .em_wrapper {
              width: 100% !important;
            }
            .em_hide {
              display: none !important;
            }
            .em_aside10 {
              padding: 0px 10px !important;
            }
            .em_h20 {
              height: 20px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_h10 {
              height: 10px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_aside5 {
              padding: 0px 10px !important;
            }
            .em_ptop2 {
              padding-top: 8px !important;
            }
          }
          @media only screen and (min-width: 375px) and (max-width: 480px) {
            .em_main_table {
              width: 100% !important;
            }
            .em_wrapper {
              width: 100% !important;
            }
            .em_hide {
              display: none !important;
            }
            .em_aside10 {
              padding: 0px 10px !important;
            }
            .em_aside5 {
              padding: 0px 8px !important;
            }
            .em_h20 {
              height: 20px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_h10 {
              height: 10px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_font_11 {
              font-size: 12px !important;
            }
            .em_font_22 {
              font-size: 22px !important;
              line-height: 25px !important;
            }
            .em_w5 {
              width: 7px !important;
            }
            .em_w150 {
              width: auto !important;
              height: auto !important;
            }
            .em_ptop2 {
              padding-top: 8px !important;
            }
            u + .em_body .em_full_wrap {
              width: 100% !important;
              width: 100vw !important;
            }
          }
          @media only screen and (max-width: 374px) {
            .em_main_table {
              width: 100% !important;
            }
            .em_wrapper {
              width: 100% !important;
            }
            .em_hide {
              display: none !important;
            }
            .em_aside10 {
              padding: 0px 10px !important;
            }
            .em_aside5 {
              padding: 0px 8px !important;
            }
            .em_h20 {
              height: 20px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_h10 {
              height: 10px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_font_11 {
              font-size: 11px !important;
            }
            .em_font_22 {
              font-size: 22px !important;
              line-height: 25px !important;
            }
            .em_w5 {
              width: 5px !important;
            }
            .em_w150 {
              width: auto !important;
              height: auto !important;
            }
            .em_ptop2 {
              padding-top: 8px !important;
            }
            u + .em_body .em_full_wrap {
              width: 100% !important;
              width: 100vw !important;
            }
          }
        </style>
      </head>
      <body
        class="em_body"
        style="margin: 0px auto; padding: 0px"
        bgcolor="#efefef"
      >
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="em_full_wrap"
          align="center"
          bgcolor="#efefef"
        >
          <tr>
            <td align="center" valign="top">
              <table
                align="center"
                width="650"
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="em_main_table"
                style="width: 650px; table-layout: fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px"
                    class="em_aside10"
                  >
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr>
                        <td height="25" style="height: 25px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <a href="#" target="_blank" style="text-decoration: none"
                            ><img
                              src="https://res.cloudinary.com/lmcs/image/upload/v1630055729/static/favicon-32x32_fbthbv.png"
                              width="32px"
                              height="32px"
                              alt="lmcs logo"
                              border="0"
                              style="
                                display: block;
                                font-family: Arial, sans-serif;
                                font-size: 18px;
                                line-height: 25px;
                                text-align: center;
                                color: #1d4685;
                                font-weight: bold;
                                max-width: 208px;
                              "
                              class="em_w150"
                            />
                            LION MULTI-PURPOSE COOPERATIVE SOCIETY NIGERIA LIMITED</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td height="28" style="height: 28px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="em_full_wrap"
          align="center"
          bgcolor="#efefef"
        >
          <tr>
            <td align="center" valign="top" class="em_aside5">
              <table
                align="center"
                width="650"
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="em_main_table"
                style="width: 650px; table-layout: fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px; background-color: #ffffff"
                    class="em_aside10"
                  >
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr>
                        <td height="45" style="height: 45px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_blue em_font_22"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 26px;
                            line-height: 29px;
                            color: #264780;
                            font-weight: bold;
                          "
                        >
                          Admin invitation
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="14"
                          style="height: 14px; font-size: 0px; line-height: 0px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_grey"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 16px;
                            line-height: 26px;
                            color: #434343;
                          "
                        >
                          hello, ${name} an admin account have been created for you,<br />
                          please select LOGIN AS ADMIN in the login page.<br />
                          your login details are <br />
                          email: ${recipient},
                          password: ${password} <br/>
                          endeavour to keep your login details safe
                        </td>
                      </tr>
                      <tr>
                        <td height="26" style="height: 26px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            width="250"
                            style="
                              width: 250px;
                              background-color: #6bafb2;
                              border-radius: 4px;
                            "
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tr>
                              <td
                                class="em_white"
                                height="42"
                                align="center"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 16px;
                                  color: #ffffff;
                                  font-weight: bold;
                                  height: 42px;
                                "
                              >
                                <a
                                  href="https://lmcsnigltd.org.ng/#/"
                                  target="_blank"
                                  style="
                                    text-decoration: none;
                                    color: #ffffff;
                                    line-height: 42px;
                                    display: block;
                                  "
                                  >VISIT YOUR DASHBOARD</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="em_full_wrap"
          align="center"
          bgcolor="#efefef"
        >
          <tr>
            <td align="center" valign="top">
              <table
                align="center"
                width="650"
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="em_main_table"
                style="width: 650px; table-layout: fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px"
                    class="em_aside10"
                  >
                    
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="16"
                          style="
                            height: 16px;
                            font-size: 1px;
                            line-height: 1px;
                            height: 16px;
                          "
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_grey"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 15px;
                            line-height: 18px;
                            color: #434343;
                            font-weight: bold;
                          "
                        >
                          Problems or questions?
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="10"
                          style="height: 10px; font-size: 1px; line-height: 1px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="center"
                          valign="top"
                          style="font-size: 0px; line-height: 0px"
                        >
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tr>
                              <td
                                class="em_grey em_font_11"
                                align="left"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 13px;
                                  line-height: 15px;
                                  color: #434343;
                                "
                              >
                                <a
                                  href="mailto:lmscnigltd@gmail.com"
                                  style="text-decoration: none; color: #434343"
                                  >lmscnigltd@gmail.com</a
                                >
                                <a
                                  href="mailto:lmscnigltd@gmail.com"
                                  style="text-decoration: none; color: #434343"
                                  >[mailto:lmscnigltd@gmail.com]</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="9"
                          style="font-size: 0px; line-height: 0px; height: 9px"
                          class="em_h10"
                        >
                          <img
                            src="/assets/pilot/images/templates/spacer.gif"
                            width="1"
                            height="1"
                            alt=""
                            border="0"
                            style="display: block"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tr>
                              <td
                                width="12"
                                align="left"
                                valign="middle"
                                style="
                                  font-size: 0px;
                                  line-height: 0px;
                                  width: 12px;
                                "
                              >
                                <a
                                  href="#"
                                  target="_blank"
                                  style="text-decoration: none"
                                  ><img
                                    src="/assets/pilot/images/templates/img_1.png"
                                    width="12"
                                    height="16"
                                    alt=""
                                    border="0"
                                    style="display: block; max-width: 12px"
                                /></a>
                              </td>
                              <td
                                width="7"
                                style="width: 7px; font-size: 0px; line-height: 0px"
                                class="em_w5"
                              >
                                &nbsp;
                              </td>
                              <td
                                class="em_grey em_font_11"
                                align="left"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 13px;
                                  line-height: 15px;
                                  color: #434343;
                                "
                              >
                                <a
                                  href="#"
                                  target="_blank"
                                  style="text-decoration: none; color: #434343"
                                  >LMCS Nig. Ltd</a
                                >
                                &bull; 012 ungel UNN &bull; Enugu, NSK 410001
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td height="35" style="height: 35px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    height="1"
                    bgcolor="#dadada"
                    style="font-size: 0px; line-height: 0px; height: 1px"
                  >
                    <img
                      src="/assets/pilot/images/templates/spacer.gif"
                      width="1"
                      height="1"
                      alt=""
                      border="0"
                      style="display: block"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px"
                    class="em_aside10"
                  >
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr>
                        <td
                          height="16"
                          style="font-size: 0px; line-height: 0px; height: 16px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="left"
                            class="em_wrapper"
                          >
                            <tr>
                              <td
                                class="em_grey"
                                align="center"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 11px;
                                  line-height: 16px;
                                  color: #434343;
                                "
                              >
                                &copy; lmscnigltd 2021 &nbsp;|&nbsp;
                                <a
                                  href="#"
                                  target="_blank"
                                  style="text-decoration: underline; color: #434343"
                                  >Unsubscribe</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="16"
                          style="font-size: 0px; line-height: 0px; height: 16px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    class="em_hide"
                    style="
                      line-height: 1px;
                      min-width: 650px;
                      background-color: #efefef;
                    "
                  >
                    <img
                      alt=""
                      src="/assets/pilot/images/templates/spacer.gif"
                      height="1"
                      width="650"
                      style="
                        max-height: 1px;
                        min-height: 1px;
                        display: block;
                        width: 650px;
                        min-width: 650px;
                      "
                      border="0"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html> 
      `,
  };

  sendmessage(data);
};

exports.emailConfirmation = (recipient, name, token) => {
  const url = `https://stark-depths-01637.herokuapp.com/user/emailconfirmation/${token}`;

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

  sendmessage(data);
};

exports.memberConfirmation = (recipient, name, memberid) => {
  const data = {
    from: "LMCS Nig. Ltd. <noreply@lmcsnigltd.org.ng>",
    to: recipient,
    subject: "payment confirmation",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <!--[if gte mso 9
          ]><xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG />
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml><!
        [endif]-->
        <title>lmcs confirm email</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
        <meta name="format-detection" content="telephone=no" />
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,700,700i,900,900i"
          rel="stylesheet"
        />
        <!--<![endif]-->
        <style type="text/css">
          body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100% !important;
            -ms-text-size-adjust: 100% !important;
            -webkit-font-smoothing: antialiased !important;
          }
          img {
            border: 0 !important;
            outline: none !important;
          }
          p {
            margin: 0px !important;
            padding: 0px !important;
          }
          table {
            border-collapse: collapse;
            mso-table-lspace: 0px;
            mso-table-rspace: 0px;
          }
          td,
          a,
          span {
            border-collapse: collapse;
            mso-line-height-rule: exactly;
          }
          .ExternalClass * {
            line-height: 100%;
          }
          .em_blue a {
            text-decoration: none;
            color: #264780;
          }
          .em_grey a {
            text-decoration: none;
            color: #434343;
          }
          .em_white a {
            text-decoration: none;
            color: #ffffff;
          }
    
          @media only screen and (min-width: 481px) and (max-width: 649px) {
            .em_main_table {
              width: 100% !important;
            }
            .em_wrapper {
              width: 100% !important;
            }
            .em_hide {
              display: none !important;
            }
            .em_aside10 {
              padding: 0px 10px !important;
            }
            .em_h20 {
              height: 20px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_h10 {
              height: 10px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_aside5 {
              padding: 0px 10px !important;
            }
            .em_ptop2 {
              padding-top: 8px !important;
            }
          }
          @media only screen and (min-width: 375px) and (max-width: 480px) {
            .em_main_table {
              width: 100% !important;
            }
            .em_wrapper {
              width: 100% !important;
            }
            .em_hide {
              display: none !important;
            }
            .em_aside10 {
              padding: 0px 10px !important;
            }
            .em_aside5 {
              padding: 0px 8px !important;
            }
            .em_h20 {
              height: 20px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_h10 {
              height: 10px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_font_11 {
              font-size: 12px !important;
            }
            .em_font_22 {
              font-size: 22px !important;
              line-height: 25px !important;
            }
            .em_w5 {
              width: 7px !important;
            }
            .em_w150 {
              width: auto !important;
              height: auto !important;
            }
            .em_ptop2 {
              padding-top: 8px !important;
            }
            u + .em_body .em_full_wrap {
              width: 100% !important;
              width: 100vw !important;
            }
          }
          @media only screen and (max-width: 374px) {
            .em_main_table {
              width: 100% !important;
            }
            .em_wrapper {
              width: 100% !important;
            }
            .em_hide {
              display: none !important;
            }
            .em_aside10 {
              padding: 0px 10px !important;
            }
            .em_aside5 {
              padding: 0px 8px !important;
            }
            .em_h20 {
              height: 20px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_h10 {
              height: 10px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_font_11 {
              font-size: 11px !important;
            }
            .em_font_22 {
              font-size: 22px !important;
              line-height: 25px !important;
            }
            .em_w5 {
              width: 5px !important;
            }
            .em_w150 {
              width: auto !important;
              height: auto !important;
            }
            .em_ptop2 {
              padding-top: 8px !important;
            }
            u + .em_body .em_full_wrap {
              width: 100% !important;
              width: 100vw !important;
            }
          }
        </style>
      </head>
      <body
        class="em_body"
        style="margin: 0px auto; padding: 0px"
        bgcolor="#efefef"
      >
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="em_full_wrap"
          align="center"
          bgcolor="#efefef"
        >
          <tr>
            <td align="center" valign="top">
              <table
                align="center"
                width="650"
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="em_main_table"
                style="width: 650px; table-layout: fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px"
                    class="em_aside10"
                  >
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr>
                        <td height="25" style="height: 25px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <a href="#" target="_blank" style="text-decoration: none"
                            ><img
                              src="https://res.cloudinary.com/lmcs/image/upload/v1630055729/static/favicon-32x32_fbthbv.png"
                              width="32px"
                              height="32px"
                              alt="lmcs logo"
                              border="0"
                              style="
                                display: block;
                                font-family: Arial, sans-serif;
                                font-size: 18px;
                                line-height: 25px;
                                text-align: center;
                                color: #1d4685;
                                font-weight: bold;
                                max-width: 208px;
                              "
                              class="em_w150"
                            />
                            LION MULTI-PURPOSE COOPERATIVE SOCIETY NIGERIA LIMITED</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td height="28" style="height: 28px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="em_full_wrap"
          align="center"
          bgcolor="#efefef"
        >
          <tr>
            <td align="center" valign="top" class="em_aside5">
              <table
                align="center"
                width="650"
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="em_main_table"
                style="width: 650px; table-layout: fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px; background-color: #ffffff"
                    class="em_aside10"
                  >
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr>
                        <td height="45" style="height: 45px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_blue em_font_22"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 26px;
                            line-height: 29px;
                            color: #264780;
                            font-weight: bold;
                          "
                        >
                          Your Payment Has been Confirmed
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="14"
                          style="height: 14px; font-size: 0px; line-height: 0px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_grey"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 16px;
                            line-height: 26px;
                            color: #434343;
                          "
                        >
                          hello, ${name} your registration is successful and your membership id is
                          ${memberid},<br />

                        </td>
                         <tr>
               
                         </tr>
                      </tr>
                      <tr>
                        <td height="26" style="height: 26px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            width="250"
                            style="
                              width: 250px;
                              background-color: #6bafb2;
                              border-radius: 4px;
                            "
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tr>
                              <td
                                class="em_white"
                                height="42"
                                align="center"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 16px;
                                  color: #ffffff;
                                  font-weight: bold;
                                  height: 42px;
                                "
                              >
                                <a
                                  href="https://lmcsnigltd.org.ng/signin/"
                                  target="_blank"
                                  style="
                                    text-decoration: none;
                                    color: #ffffff;
                                    line-height: 42px;
                                    display: block;
                                  "
                                  >VISIT YOUR DASHBOARD</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="em_full_wrap"
          align="center"
          bgcolor="#efefef"
        >
          <tr>
            <td align="center" valign="top">
              <table
                align="center"
                width="650"
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="em_main_table"
                style="width: 650px; table-layout: fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px"
                    class="em_aside10"
                  >
                    
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="16"
                          style="
                            height: 16px;
                            font-size: 1px;
                            line-height: 1px;
                            height: 16px;
                          "
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_grey"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 15px;
                            line-height: 18px;
                            color: #434343;
                            font-weight: bold;
                          "
                        >
                          Problems or questions?
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="10"
                          style="height: 10px; font-size: 1px; line-height: 1px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="center"
                          valign="top"
                          style="font-size: 0px; line-height: 0px"
                        >
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tr>
                              <td
                                class="em_grey em_font_11"
                                align="left"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 13px;
                                  line-height: 15px;
                                  color: #434343;
                                "
                              >
                                <a
                                  href="mailto:lmscnigltd@gmail.com"
                                  style="text-decoration: none; color: #434343"
                                  >lmscnigltd@gmail.com</a
                                >
                                <a
                                  href="mailto:lmscnigltd@gmail.com"
                                  style="text-decoration: none; color: #434343"
                                  >[mailto:lmscnigltd@gmail.com]</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="9"
                          style="font-size: 0px; line-height: 0px; height: 9px"
                          class="em_h10"
                        >
                          <img
                            src="/assets/pilot/images/templates/spacer.gif"
                            width="1"
                            height="1"
                            alt=""
                            border="0"
                            style="display: block"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tr>
                              <td
                                width="12"
                                align="left"
                                valign="middle"
                                style="
                                  font-size: 0px;
                                  line-height: 0px;
                                  width: 12px;
                                "
                              >
                                <a
                                  href="#"
                                  target="_blank"
                                  style="text-decoration: none"
                                  ><img
                                    src="/assets/pilot/images/templates/img_1.png"
                                    width="12"
                                    height="16"
                                    alt=""
                                    border="0"
                                    style="display: block; max-width: 12px"
                                /></a>
                              </td>
                              <td
                                width="7"
                                style="width: 7px; font-size: 0px; line-height: 0px"
                                class="em_w5"
                              >
                                &nbsp;
                              </td>
                              <td
                                class="em_grey em_font_11"
                                align="left"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 13px;
                                  line-height: 15px;
                                  color: #434343;
                                "
                              >
                                <a
                                  href="#"
                                  target="_blank"
                                  style="text-decoration: none; color: #434343"
                                  >LMCS Nig. Ltd</a
                                >
                                &bull; 012 ungel UNN &bull; Enugu, NSK 410001
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td height="35" style="height: 35px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    height="1"
                    bgcolor="#dadada"
                    style="font-size: 0px; line-height: 0px; height: 1px"
                  >
                    <img
                      src="/assets/pilot/images/templates/spacer.gif"
                      width="1"
                      height="1"
                      alt=""
                      border="0"
                      style="display: block"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px"
                    class="em_aside10"
                  >
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr>
                        <td
                          height="16"
                          style="font-size: 0px; line-height: 0px; height: 16px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="left"
                            class="em_wrapper"
                          >
                            <tr>
                              <td
                                class="em_grey"
                                align="center"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 11px;
                                  line-height: 16px;
                                  color: #434343;
                                "
                              >
                                &copy; lmscnigltd 2021 &nbsp;|&nbsp;
                                <a
                                  href="#"
                                  target="_blank"
                                  style="text-decoration: underline; color: #434343"
                                  >Unsubscribe</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="16"
                          style="font-size: 0px; line-height: 0px; height: 16px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    class="em_hide"
                    style="
                      line-height: 1px;
                      min-width: 650px;
                      background-color: #efefef;
                    "
                  >
                    <img
                      alt=""
                      src="/assets/pilot/images/templates/spacer.gif"
                      height="1"
                      width="650"
                      style="
                        max-height: 1px;
                        min-height: 1px;
                        display: block;
                        width: 650px;
                        min-width: 650px;
                      "
                      border="0"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    
      `,
  };

  sendmessage(data);
};

exports.passwordResetLink = (recipient, link) => {
  const data = {
    from: "LMCS Nig. Ltd. <noreply@lmcsnigltd.org.ng>",
    to: recipient,
    subject: "password reset link",
    html: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <!--[if gte mso 9
          ]><xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG />
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml><!
        [endif]-->
        <title>lmcs confirm email</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
        <meta name="format-detection" content="telephone=no" />
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,700,700i,900,900i"
          rel="stylesheet"
        />
        <!--<![endif]-->
        <style type="text/css">
          body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100% !important;
            -ms-text-size-adjust: 100% !important;
            -webkit-font-smoothing: antialiased !important;
          }
          img {
            border: 0 !important;
            outline: none !important;
          }
          p {
            margin: 0px !important;
            padding: 0px !important;
          }
          table {
            border-collapse: collapse;
            mso-table-lspace: 0px;
            mso-table-rspace: 0px;
          }
          td,
          a,
          span {
            border-collapse: collapse;
            mso-line-height-rule: exactly;
          }
          .ExternalClass * {
            line-height: 100%;
          }
          .em_blue a {
            text-decoration: none;
            color: #264780;
          }
          .em_grey a {
            text-decoration: none;
            color: #434343;
          }
          .em_white a {
            text-decoration: none;
            color: #ffffff;
          }
    
          @media only screen and (min-width: 481px) and (max-width: 649px) {
            .em_main_table {
              width: 100% !important;
            }
            .em_wrapper {
              width: 100% !important;
            }
            .em_hide {
              display: none !important;
            }
            .em_aside10 {
              padding: 0px 10px !important;
            }
            .em_h20 {
              height: 20px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_h10 {
              height: 10px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_aside5 {
              padding: 0px 10px !important;
            }
            .em_ptop2 {
              padding-top: 8px !important;
            }
          }
          @media only screen and (min-width: 375px) and (max-width: 480px) {
            .em_main_table {
              width: 100% !important;
            }
            .em_wrapper {
              width: 100% !important;
            }
            .em_hide {
              display: none !important;
            }
            .em_aside10 {
              padding: 0px 10px !important;
            }
            .em_aside5 {
              padding: 0px 8px !important;
            }
            .em_h20 {
              height: 20px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_h10 {
              height: 10px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_font_11 {
              font-size: 12px !important;
            }
            .em_font_22 {
              font-size: 22px !important;
              line-height: 25px !important;
            }
            .em_w5 {
              width: 7px !important;
            }
            .em_w150 {
              width: auto !important;
              height: auto !important;
            }
            .em_ptop2 {
              padding-top: 8px !important;
            }
            u + .em_body .em_full_wrap {
              width: 100% !important;
              width: 100vw !important;
            }
          }
          @media only screen and (max-width: 374px) {
            .em_main_table {
              width: 100% !important;
            }
            .em_wrapper {
              width: 100% !important;
            }
            .em_hide {
              display: none !important;
            }
            .em_aside10 {
              padding: 0px 10px !important;
            }
            .em_aside5 {
              padding: 0px 8px !important;
            }
            .em_h20 {
              height: 20px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_h10 {
              height: 10px !important;
              font-size: 1px !important;
              line-height: 1px !important;
            }
            .em_font_11 {
              font-size: 11px !important;
            }
            .em_font_22 {
              font-size: 22px !important;
              line-height: 25px !important;
            }
            .em_w5 {
              width: 5px !important;
            }
            .em_w150 {
              width: auto !important;
              height: auto !important;
            }
            .em_ptop2 {
              padding-top: 8px !important;
            }
            u + .em_body .em_full_wrap {
              width: 100% !important;
              width: 100vw !important;
            }
          }
        </style>
      </head>
      <body
        class="em_body"
        style="margin: 0px auto; padding: 0px"
        bgcolor="#efefef"
      >
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="em_full_wrap"
          align="center"
          bgcolor="#efefef"
        >
          <tr>
            <td align="center" valign="top">
              <table
                align="center"
                width="650"
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="em_main_table"
                style="width: 650px; table-layout: fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px"
                    class="em_aside10"
                  >
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr>
                        <td height="25" style="height: 25px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <a href="#" target="_blank" style="text-decoration: none"
                            ><img
                              src="https://res.cloudinary.com/lmcs/image/upload/v1630055729/static/favicon-32x32_fbthbv.png"
                              width="32px"
                              height="32px"
                              alt="lmcs logo"
                              border="0"
                              style="
                                display: block;
                                font-family: Arial, sans-serif;
                                font-size: 18px;
                                line-height: 25px;
                                text-align: center;
                                color: #1d4685;
                                font-weight: bold;
                                max-width: 208px;
                              "
                              class="em_w150"
                            />
                            LION MULTI-PURPOSE COOPERATIVE SOCIETY NIGERIA LIMITED</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td height="28" style="height: 28px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="em_full_wrap"
          align="center"
          bgcolor="#efefef"
        >
          <tr>
            <td align="center" valign="top" class="em_aside5">
              <table
                align="center"
                width="650"
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="em_main_table"
                style="width: 650px; table-layout: fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px; background-color: #ffffff"
                    class="em_aside10"
                  >
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr>
                        <td height="45" style="height: 45px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_blue em_font_22"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 26px;
                            line-height: 29px;
                            color: #264780;
                            font-weight: bold;
                          "
                        >
                        Forgot your password?
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="14"
                          style="height: 14px; font-size: 0px; line-height: 0px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_grey"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 16px;
                            line-height: 26px;
                            color: #434343;
                          "
                        >
                        It happens to the best of us. The good news is you can
                        change it.

                        </td>
                         <tr>
               
                         </tr>
                      </tr>
                      <tr>
                        <td height="26" style="height: 26px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            width="250"
                            style="
                              width: 250px;
                              background-color: #6bafb2;
                              border-radius: 4px;
                            "
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tr>
                              <td
                                class="em_white"
                                height="42"
                                align="center"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 16px;
                                  color: #ffffff;
                                  font-weight: bold;
                                  height: 42px;
                                "
                              >
                                <a
                                  href=${link}
                                  target="_blank"
                                  style="
                                    text-decoration: none;
                                    color: #ffffff;
                                    line-height: 42px;
                                    display: block;
                                  "
                                  >RESET YOUR PASSWORD</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td height="25" style="height: 25px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_grey"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 16px;
                            line-height: 26px;
                            color: #434343;
                          "
                        >
                          If you didn&rsquo;t request a password reset, you
                          don&rsquo;t have to do anything.
                        </td>
                      </tr>
                      <tr>
                        <td height="44" style="height: 44px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          class="em_full_wrap"
          align="center"
          bgcolor="#efefef"
        >
          <tr>
            <td align="center" valign="top">
              <table
                align="center"
                width="650"
                border="0"
                cellspacing="0"
                cellpadding="0"
                class="em_main_table"
                style="width: 650px; table-layout: fixed"
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px"
                    class="em_aside10"
                  >
                    
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="16"
                          style="
                            height: 16px;
                            font-size: 1px;
                            line-height: 1px;
                            height: 16px;
                          "
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="em_grey"
                          align="center"
                          valign="top"
                          style="
                            font-family: Arial, sans-serif;
                            font-size: 15px;
                            line-height: 18px;
                            color: #434343;
                            font-weight: bold;
                          "
                        >
                          Problems or questions?
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="10"
                          style="height: 10px; font-size: 1px; line-height: 1px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="center"
                          valign="top"
                          style="font-size: 0px; line-height: 0px"
                        >
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tr>
                              <td
                                class="em_grey em_font_11"
                                align="left"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 13px;
                                  line-height: 15px;
                                  color: #434343;
                                "
                              >
                                <a
                                  href="mailto:lmscnigltd@gmail.com"
                                  style="text-decoration: none; color: #434343"
                                  >lmscnigltd@gmail.com</a
                                >
                                <a
                                  href="mailto:lmscnigltd@gmail.com"
                                  style="text-decoration: none; color: #434343"
                                  >[mailto:lmscnigltd@gmail.com]</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="9"
                          style="font-size: 0px; line-height: 0px; height: 9px"
                          class="em_h10"
                        >
                          <img
                            src="/assets/pilot/images/templates/spacer.gif"
                            width="1"
                            height="1"
                            alt=""
                            border="0"
                            style="display: block"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tr>
                              <td
                                width="12"
                                align="left"
                                valign="middle"
                                style="
                                  font-size: 0px;
                                  line-height: 0px;
                                  width: 12px;
                                "
                              >
                                <a
                                  href="#"
                                  target="_blank"
                                  style="text-decoration: none"
                                  ><img
                                    src="/assets/pilot/images/templates/img_1.png"
                                    width="12"
                                    height="16"
                                    alt=""
                                    border="0"
                                    style="display: block; max-width: 12px"
                                /></a>
                              </td>
                              <td
                                width="7"
                                style="width: 7px; font-size: 0px; line-height: 0px"
                                class="em_w5"
                              >
                                &nbsp;
                              </td>
                              <td
                                class="em_grey em_font_11"
                                align="left"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 13px;
                                  line-height: 15px;
                                  color: #434343;
                                "
                              >
                                <a
                                  href="#"
                                  target="_blank"
                                  style="text-decoration: none; color: #434343"
                                  >LMCS Nig. Ltd</a
                                >
                                &bull; 012 ungel UNN &bull; Enugu, NSK 410001
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td height="35" style="height: 35px" class="em_h20">
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    height="1"
                    bgcolor="#dadada"
                    style="font-size: 0px; line-height: 0px; height: 1px"
                  >
                    <img
                      src="/assets/pilot/images/templates/spacer.gif"
                      width="1"
                      height="1"
                      alt=""
                      border="0"
                      style="display: block"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style="padding: 0 25px"
                    class="em_aside10"
                  >
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      align="center"
                    >
                      <tr>
                        <td
                          height="16"
                          style="font-size: 0px; line-height: 0px; height: 16px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td align="center" valign="top">
                          <table
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            align="left"
                            class="em_wrapper"
                          >
                            <tr>
                              <td
                                class="em_grey"
                                align="center"
                                valign="middle"
                                style="
                                  font-family: Arial, sans-serif;
                                  font-size: 11px;
                                  line-height: 16px;
                                  color: #434343;
                                "
                              >
                                &copy; lmscnigltd 2021 &nbsp;|&nbsp;
                                <a
                                  href="#"
                                  target="_blank"
                                  style="text-decoration: underline; color: #434343"
                                  >Unsubscribe</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          height="16"
                          style="font-size: 0px; line-height: 0px; height: 16px"
                        >
                          &nbsp;
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    class="em_hide"
                    style="
                      line-height: 1px;
                      min-width: 650px;
                      background-color: #efefef;
                    "
                  >
                    <img
                      alt=""
                      src="/assets/pilot/images/templates/spacer.gif"
                      height="1"
                      width="650"
                      style="
                        max-height: 1px;
                        min-height: 1px;
                        display: block;
                        width: 650px;
                        min-width: 650px;
                      "
                      border="0"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`,
  };
  sendmessage(data);
};

const sendmessage = (data) => {
  mailgun.messages().send(data, (error, body) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log(body);
  });
};
