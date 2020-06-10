import http from 'k6/http';
import { check } from 'k6';

export let options = {
  // Number of virtual users to being with
  vus: 50,
  stages: [
    { duration: '5s', target: 50},
  ],
  /*** Basic ***/
  thresholds: {
    // We want the 95th percentile of all HTTP request durations to be less than 500ms
    "http_req_duration": ["p(90) < 200"],
  },


  /*** Multiple validation per type ***/
  // thresholds: {
  //   "http_req_duration": ['p(90) < 200', 'p(95) < 300', 'max < 1000'],
  // }


  /*** Mutiple types ***/
  // thresholds: {
  //   "http_req_duration": ["p(90) < 200"],
  //   "http_req_waiting": ["p(90) < 150"],
  //   "http_reqs": ["count > 3500"],
  // }
};

// Executed per virtual user
export default function () {
  // Perform GET api call
  let response = http.get('https://test-api.k6.io/');

  // Validate response status code
  check(response, {
    'status is 200': r => r.status === 200
  });
}