import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10,
  iterations: 100
};

export default function () {
  //http.get('http://host.docker.internal/maker/list');
  const post_input = {
    'log': 'admin',
    'pwd': 'kqMd$V95%Cu&gS((JV',
    'redirect_to':'http://host.docker.internal:8000/wp-admin/'
  };
  let res;
  res = http.get('http://host.docker.internal:8000/wp-login.php');
  res = http.post('http://host.docker.internal:8000/wp-login.php', post_input, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  if ( res.url.indexOf('wp-login.php') !== -1 ) {
    console.log('login failed');
    return;
  }
  const params = { cookies: res.cookies };
  res = http.get('http://host.docker.internal:8000/wp-admin/', params);
  console.log('login success');
  sleep(1);
}
