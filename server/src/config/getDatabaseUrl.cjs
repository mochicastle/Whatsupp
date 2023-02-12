const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/whatsupp_development",
      test: "postgres://postgres:postgres@localhost:5432/whatsupp_test",
      e2e: "postgres://postgres:postgres@localhost:5432/whatsupp_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
