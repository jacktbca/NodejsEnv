// ref-1: https://medium.com/faun/managing-mongodb-on-docker-with-docker-compose-26bf8a0bbae3
// ref-2: https://hub.docker.com/_/mongo
db.createUser(
  {
      user: "root",
      pwd: "secret",
      roles: [
          {
              role: "readWrite",
              db: "db"
          }
      ]
  }
)
