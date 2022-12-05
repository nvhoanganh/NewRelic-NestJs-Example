// eslint-disable-next-line @typescript-eslint/no-var-requires
const newrelic = require('newrelic');
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return newrelic.startSegment('getHelloService', false, () => {
      // https://docs.newrelic.com/docs/apm/agents/nodejs-agent/api-guides/nodejs-agent-api/#increment_metric
      newrelic.incrementMetric('API/HelloService', 1);
      return 'Hello World!';
    });
  }
}
