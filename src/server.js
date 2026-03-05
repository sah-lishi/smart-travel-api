import app from "./app.js";
import _config from "./config/index.js";

app.listen(_config.port, () => console.log(`Server is running on port ${_config.port}`))