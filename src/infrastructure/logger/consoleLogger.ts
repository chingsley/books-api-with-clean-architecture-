import { LoggerInterface } from './interface';
class ConsoleLogger implements LoggerInterface {
  log = console.log;
  info(err: string) {
    this.log(err);
  }

  debug(err: string) {
    this.log(err);
  }

  error(err: string) {
    this.error(err);
  }
}

const consoleLogger = new ConsoleLogger();
export { consoleLogger };