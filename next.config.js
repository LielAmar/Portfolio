const { createSecureHeaders } = require("next-secure-headers");

const defaultSources = ["http://localhost:3000", "https://www.lielamar.com", "https://dev.lielamar.com/",
"ws://localhost:3000", "ws://lielamar.com", "ws://www.lielamar.com", "wss://lielamar.com", "wss://www.lielamar.com"];

const stylesheetSources = [...defaultSources, "https://platform.twitter.com"];
const stylesheetSourcesElements = [...defaultSources, "https://fonts.googleapis.com", "https://platform.twitter.com"];

const scriptSources = [...defaultSources, "https://apis.google.com"];
const scriptSourcesElements = [...defaultSources, "https://platform.twitter.com", "https://cdn.syndication.twimg.com", "https://apis.google.com", "https://www.googletagmanager.com"];

const fontSources = [...defaultSources, "https://fonts.googleapis.com", "https://fonts.gstatic.com"];
const imageSources = [...defaultSources, "data:", "https://platform.twitter.com", "https://syndication.twitter.com/", "https://abs.twimg.com", "https://pbs.twimg.com", "https://lh3.googleusercontent.com"];
const frameSources = [...defaultSources, "https://platform.twitter.com", "https://cdn.syndication.twimg.com",
  "https://syndication.twitter.com", "https://discordapp.com", "https://discord.com", "https://portfolio-25fd0.firebaseapp.com/"];

const connectSources = [...defaultSources, "https://www.googleapis.com", "https://us-central1-portfolio-25fd0.cloudfunctions.net/", "https://securetoken.googleapis.com", "https://firebase.googleapis.com/", "https://firebaseinstallations.googleapis.com", "https://identitytoolkit.googleapis.com", "https://www.google-analytics.com"];

module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders(
          {
            contentSecurityPolicy: {
              directives: {
                defaultSrc: ["'unsafe-eval'", "'self'"],

                styleSrc: ["'unsafe-eval'", "'unsafe-inline'", ...stylesheetSources],
                styleSrcElem: ["'unsafe-eval'", "'unsafe-inline'", ...stylesheetSourcesElements],

                scriptSrc: ["'unsafe-eval'", "'unsafe-inline'", ...scriptSources],
                scriptSrcElem: ["'unsafe-eval'", "'unsafe-inline'", ...scriptSourcesElements],

                fontSrc: ["'unsafe-eval'", "'unsafe-inline'", ...fontSources],
                imgSrc: ["'unsafe-eval'", "'unsafe-inline'", ...imageSources],
                frameSrc: ["'unsafe-eval'", "'unsafe-inline'", ...frameSources],

                connectSrc: ["'unsafe-eval'", "'unsafe-inline'", ...connectSources],
              },
            },
            forceHTTPSRedirect: [ true, { includeSubDomains: true }],
            referrerPolicy: "same-origin",
            nosniff: "nosniff",
            frameGuard: ["allow-from", { uri: ["https://platform.twitter.com", "https://discordapp.com", "https://twitter.com"] }],
            xssProtection: "sanitize"
          }
        )
      }
    ];
  },
}