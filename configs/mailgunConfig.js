const DOMAIN = "sandboxecfadec977634c0f96a3a476c4119e66.mailgun.org";
module.exports = () => {
  const emailConfig = {
    apiKey: process.env.MAILGUN_API_KEY,
    domain: DOMAIN,
  };
  return emailConfig;
};
