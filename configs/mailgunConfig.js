const DOMAIN = "lmcsnigltd.org.ng";
module.exports = () => {
  const emailConfig = {
    apiKey: process.env.MAILGUN_API_KEY,
    domain: DOMAIN,
  };
  return emailConfig;
};
