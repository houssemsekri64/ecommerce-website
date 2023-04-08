module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: [
      "daapdgG+rD55vUybcuPfw==",
      "pCPjzPT3yU2qDldstxHw9g==",
      "R4lFWBQYiNQLlXoOkCD+9A==",
    ],
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
