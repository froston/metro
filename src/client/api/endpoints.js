const get = (url) => {
  const headers = new Headers();
  headers.append('Authorization', 'Basic ' + localStorage.getItem('token'));
  return fetch(`${API_DEV}/${url}`, {
    method: 'GET',
    headers: headers,
  })
  .then((res) => res.json())
}

const post = (url, data) => {
  const headers = new Headers();
  headers.append('Authorization', 'Basic ' + localStorage.getItem('token'));
  return fetch(`${API_DEV}/${url}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  })
  .then((res) => res.json())
}

export {
  get,
  post
}
