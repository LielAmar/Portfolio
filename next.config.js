const { createSecureHeaders } = require("next-secure-headers");

const stylesheetSources = ["https://localhost:3000", "https://platform.twitter.com"];
const stylesheetSourcesElements = ["https://fonts.googleapis.com", "https://platform.twitter.com"];

const scriptSources = ["https://localhgost:3000"];
const scriptSourcesElements = ["http://localhost:3000", "https://www.lielamar.com", "https://platform.twitter.com", "https://cdn.syndication.twimg.com"];

const fontSources = ["https://fonts.googleapis.com", "https://fonts.gstatic.com"];
const imageSources = ["http://localhost:3000", "data:", "https://www.lielamar.com", "https://platform.twitter.com", "https://syndication.twitter.com/", "https://abs.twimg.com", "https://pbs.twimg.com"];
const frameSources = ["http://localhost:3000", "https://www.lielamar.com", "https://platform.twitter.com", "https://cdn.syndication.twimg.com",
  "https://syndication.twitter.com", "https://discordapp.com", "https://discord.com"];

module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders(
          {
            contentSecurityPolicy: {
              directives: {
                defaultSrc: "'self'",

                styleSrc: ["'unsafe-inline'", ...stylesheetSources],
                styleSrcElem: ["'unsafe-inline'", ...stylesheetSourcesElements],

                scriptSrc: ["'unsafe-inline'", ...scriptSources],
                scriptSrcElem: ["'unsafe-inline'", ...scriptSourcesElements],

                fontSrc: ["'unsafe-inline'", ...fontSources],
                imgSrc: ["'unsafe-inline'", ...imageSources],
                frameSrc: ["'unsafe-inline'", ...frameSources],
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