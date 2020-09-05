import React from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../store/AuthStore/AuthStore'

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => (
    <AuthContext.Consumer>
      {({ isAuthenticated, login, logout }) => {
        return <WrappedComponent {...props} isAuthenticated={isAuthenticated} login={login} logout={logout} />
      }}
    </AuthContext.Consumer>
  )

  hocComponent.propTypes = {}

  return hocComponent
}
