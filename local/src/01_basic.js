import http from 'k6/http';
import { check } from 'k6';

// Initialize
export let options = {
  // Number of virtual users to being with
  vus: 50,
  stages: [
    { duration: '5s', target: 50},
  ],
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