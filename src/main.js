import {web as app} from "./application/web.js";
import {logger} from "./application/logging.js";

app.listen(3002, () => {
  logger.info("App start");
});