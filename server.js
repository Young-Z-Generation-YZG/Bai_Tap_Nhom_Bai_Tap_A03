const server = require("./src/app");

const {
  app: { port },
} = require("./src/configs/env.config");

const PORT = port || 3001;

server.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
