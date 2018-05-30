let connectionString =
  process.platform === "win32"
    ? "postgres://postgres:root@localhost/adoptopet"
    : "postgres://localhost/adoptopet";

module.exports = {
  development: {
    client: "pg",
    connection: connectionString
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
