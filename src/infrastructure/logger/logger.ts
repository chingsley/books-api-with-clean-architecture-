import { LoggerInterface } from './interface';
import { logger as winstonLogger } from './winston';
// import { consoleLogger } from './consoleLogger';

class Logger {
  logger: LoggerInterface;
  constructor(loggerClient: LoggerInterface) {
    this.logger = loggerClient;
  }

  info(err: string) {
    this.logger.info(err);
  }

  debug(err: string) {
    this.logger.debug(err);
  }

  error(err: string) {
    this.logger.error(err);
  }
}

const logger = new Logger(winstonLogger);
// const logger = new Logger(consoleLogger);
export default logger;