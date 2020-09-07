import React from 'react'
import { AuthContext } from '../../store/AuthStore/AuthStore'

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => (
    <AuthContext.Consumer>
      {({ isAuthenticated, login, logout }) => {
        return <WrappedComponent {...props} isAuthenticated={isAuthenticated} login={login} logout={logout} />
      }}
    </AuthContext.Consumer>
  )

  return hocComponent
}
