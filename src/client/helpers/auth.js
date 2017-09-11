const isAuthenticated = false;

const authenticate = (name, password, callback) => {
  if (name === "pavel" && password === "pavel123") {
    this.isAuthenticated = true
    setTimeout(callback, 100) // fake async
  } else {
    this.isAuthenticated = false
    setTimeout(callback, 100) // fake async
  }
  
}
const signout = (callback) => {
  this.isAuthenticated = false
  setTimeout(callback, 100)
}

export {
    authenticate,
    signout
}