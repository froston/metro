const users = [
  {id: 1, name: 'Federico Villa'},
  {id: 2, name: 'Pavel Muller'},
  {id: 3, name: 'Dante Costilla'},
  {id: 4, name: 'Pablo Hurtado'},
  {id: 5, name: 'Jose Ayala'}
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
    setTimeout(() => {
      resolve({data: users})
    }, 1000);
  });
}

const getUserById = (id) => {
  return users.find((user) => user.id === id)
}

export {
  getUsers,
  getUserById
}
