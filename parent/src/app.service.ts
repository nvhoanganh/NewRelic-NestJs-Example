// eslint-disable-next-line @typescript-eslint/no-var-requires
const newrelic = require('newrelic');
import { Injectable, HttpService } from '@nestjs/common';
import { response } from 'express';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private http: HttpService) { }
  getHello(): any {
    //return newrelic.startSegment('getHelloService', false, () => {
    console.log('Calling child ...');
    return this.http
      .get('http://localhost:3001')
      .pipe(
        map((response) => {
          console.log(`Child says ${JSON.stringify(response.data)}`);
          return 'child service said:' + response.data;
        }
        ),
      );
    // });
  }
}
