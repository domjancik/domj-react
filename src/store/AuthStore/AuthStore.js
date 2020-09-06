import React, { Component } from 'react'

const ACCESS_TOKEN_KEY = 'access_token'

export const AuthContext = React.createContext()

export default class AuthStore extends Component {
  state = {
    accessToken: '',
    isAuthenticated: false,
  }

  componentDidMount() {
    this.setAccessToken(sessionStorage.getItem(ACCESS_TOKEN_KEY))
  }

  setAccessToken = (accessToken) => {
    const isAuthenticated = !!accessToken
    sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken)

    this.setState({
      accessToken,
      isAuthenticated,
    })
  }

  logout = () => {
    this.setAccessToken('')
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuthenticated: false,//this.state.isAuthenticated,
          login: this.setAccessToken,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
