import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 20,
  stages: [
    { duration: '20s', target: 20},
  ],
    thresholds: {
      http_req_duration: [
        "p(90) < 3000", 
        "p(95) < 3500",
      ],
    },
  };

export default function () {
    let params = {
        headers: {
          "host": "example.hostname.com"
    }};
  
    let responses = http.batch([
      ['GET', 'http://nginx:3000', null, params],
    ]);
  
    responses.forEach(response => {
      check(response, {
        'status is 200': r => r.status === 200
      })
    });
}