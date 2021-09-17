const { createSecureHeaders } = require("next-secure-headers");

const defaultSources = ["http://localhost:3000", "https://www.lielamar.com"];

const stylesheetSources = [...defaultSources, "https://platform.twitter.com"];
const stylesheetSourcesElements = [...defaultSources, "https://fonts.googleapis.com", "https://platform.twitter.com"];

const scriptSources = [...defaultSources];
const scriptSourcesElements = [...defaultSources, "https://platform.twitter.com", "https://cdn.syndication.twimg.com"];

const fontSources = [...defaultSources, "https://fonts.googleapis.com", "https://fonts.gstatic.com"];
const imageSources = [...defaultSources, "data:", "https://platform.twitter.com", "https://syndication.twitter.com/", "https://abs.twimg.com", "https://pbs.twimg.com"];
const frameSources = [...defaultSources, "https://platform.twitter.com", "https://cdn.syndication.twimg.com",
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