

/**
 * @typedef {Object} Props
 * @property {unknown} appName
 * @property {unknown} headerImageSrc
 * @property {unknown} actionDescription
 * @property {unknown} signInLink
 * @property {unknown} supportEmail
 * @property {unknown} year
 */


/**
 * Generates the email template.
 * @param {Props} props - The properties to inject into the template.
 * @returns {string} The generated email HTML.
 */

const emailTemplate = (props) => `<!doctype html>
<html lang="und" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title></title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      #outlook a { padding:0; }
      body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
      table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
      img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
      p { display:block;margin:13px 0; }
    </style>
    <!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]-->
    <!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
    
      <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
        <style type="text/css">
          @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
        </style>
      <!--<![endif]-->

    
    
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }
    </style>
    
    
  
    
    <style type="text/css">

    @media only screen and (max-width:479px) {
      table.mj-full-width-mobile { width: 100% !important; }
      td.mj-full-width-mobile { width: auto !important; }
    }
  
    </style>
     
    <style type="text/css">
.button a { text-decoration: none; }
    </style>
    
  </head>
  <body style="word-spacing:normal;">
    
    <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">Your Sign-in Link to ${props.appName} - Get Started!</div>
  
    
      <div
         style="" lang="und" dir="auto"
      >
        
      
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#f9fafb" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  style="background:#f9fafb;background-color:#f9fafb;margin:0px auto;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f9fafb;background-color:#f9fafb;width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                  
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;" class="mj-full-width-mobile"
      >
        <tbody>
          <tr>
            <td  style="width:550px;" class="mj-full-width-mobile">
              
      <img
         alt="${props.appName} Header Image" src="${props.headerImageSrc}" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="550" height="auto"
      />
    
            </td>
          </tr>
        </tbody>
      </table>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="center" style="font-size:0px;padding:10px 25px;padding-top:30px;padding-bottom:10px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:24px;font-weight:bold;line-height:1;text-align:center;text-transform:uppercase;color:#4f46e5;"
      >${props.appName}</div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="center" style="font-size:0px;padding:12px 25px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:normal;line-height:24px;text-align:center;color:#111827;"
      >Sign in to <strong style="font-weight: bold;">${props.appName}</strong><br /> to ${props.actionDescription}</div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="center" class="button" style="font-size:0px;padding:20px;word-break:break-word;"
                >
                  
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:150px;line-height:100%;"
      >
        <tbody>
          <tr>
            <td
               align="center" bgcolor="#4f46e5" role="presentation" style="border:none;border-radius:8px;cursor:auto;height:60px;mso-padding-alt:10px 25px;background:#4f46e5;" valign="middle"
            >
              <a
                 href="${props.signInLink}" style="display:inline-block;width:100px;background:#4f46e5;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:18px;font-weight:bold;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:8px;" target="_blank"
              >
                SIGN IN
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="center" style="font-size:0px;padding:20px 25px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:14px;line-height:1;text-align:center;color:#6b7280;"
      >If you didn't request this email, you can safely ignore it.</div>
    
                </td>
              </tr>
            
              <tr>
                <td
                   align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:14px;line-height:1;text-align:center;color:#6b7280;"
      >If you believe you received this email by mistake, please contact our support team<br/><a href="mailto:${props.supportEmail}" style="color: #4f46e5;">${props.supportEmail}</a>.</div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#f9fafb" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div  style="background:#f9fafb;background-color:#f9fafb;margin:0px auto;max-width:600px;">
        
        <table
           align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f9fafb;background-color:#f9fafb;width:100%;"
        >
          <tbody>
            <tr>
              <td
                 style="direction:ltr;font-size:0px;padding:0 25px;text-align:center;"
              >
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:550px;" ><![endif]-->
            
      <div
         class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
      >
        
      <table
         border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"
      >
        <tbody>
          
              <tr>
                <td
                   align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"
                >
                  
      <div
         style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:12px;line-height:1;text-align:center;color:#6b7280;"
      >© ${props.year} ${props.appName}, All rights reserved.</div>
    
                </td>
              </tr>
            
        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><![endif]-->
    
    
      </div>
    
  </body>
</html>
  `;
export default emailTemplate;
    