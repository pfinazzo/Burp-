let setToken = token => {
  token ? localStorage.setItem('token', token) : localStorage.remove('token');
}

export default {
  setToken
}
