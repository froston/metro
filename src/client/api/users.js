import { get, post } from './endpoints'

const getUsers = () => {
  return get('users').then((data) => {
    return data
  }).catch((err)=>{
    console.error(err)
  })
}

const getUserById = (id) => {
  return get(`users/${id}`).then((data)=>{
    return data;
  }).catch((err)=>{
    console.error(err)
  })
}

export {
  getUsers,
  getUserById
}
