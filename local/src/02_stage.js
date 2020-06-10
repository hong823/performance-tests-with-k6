import http from 'k6/http';
import { check } from 'k6';

export let options = {
  // Number of virtual users to being with
  vus: 10,
  // Adding virtual users by stage
  stages: [
    { duration: '5s', target: 50},
    { duration: '5s', target: 200},
    { duration: '5s', target: 200},
    { duration: '5s', target: 500},
    { duration: '5s', target: 500},
  ],
  /*
  500                                           x  x  x  x  x
                                              x
                                          x
  200                      x   x  x   x
                        x
                    x       
  50            x
           x
  10 x  
     |----------|----------|----------|----------|----------|
     0          5          10         15         20         25
  */
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