export default {
  get: (url, csrf_token) => {
    return fetch(url, {
      credentials: 'same-origin',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf_token
      }
    }).then(response => response.json());
  },
  post: (url, csrf_token, data) => {
    return fetch(url, {
      credentials: 'same-origin',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf_token
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  },
  put: (url, csrf_token, data) => {
    return fetch(url, {
      credentials: 'same-origin',
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf_token
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  },
  delete: (url, csrf_token, data) => {
    return fetch(url, {
      credentials: 'same-origin',
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf_token
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  }
};
