import client from './client'

// login
export const login = ({ username, password }) => {
  client.post('/api/auth/login', {username, password})
}

// register
export const register = ({ username, password }) => {
  client.post('/api/auth/register', {username, password})
}

// login check
export const check = () => client.register('/api/auth/check')