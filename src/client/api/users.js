const users = [
  {id: 1, name: 'Pavel Muller'},
  {id: 2, name: 'Dante Costilla'}
]

/* getUsers = () => {
  fetch(`${API_DEV}/users`).then((response) => {
    return response.json()
  }).then((users)=>{
    return users
  }).catch((err) => {
    alert(err)
  })
} */

const getUsers = () => {
  // fake api
  return new Promise((resolve, reject) => {
    resolve({data: users})
  });
}

const getUserById = (id) => {
  return users.find((user) => user.id === id)
}

export {
  getUsers,
  getUserById
}
