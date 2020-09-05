import React from 'react'
import { getLink } from '../../../util/contentful-oauth'
import { AuthContext } from '../../../store/AuthStore/AuthStore'

export default function LoginButton() {
  return (
    <AuthContext.Consumer>
      {({ isAuthenticated, logout }) => {
        return !isAuthenticated ? (
          <a href={getLink()}>{'<>'}</a>
        ) : (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              logout()
            }}
          >
            {'><'}
          </a>
        )
      }}
    </AuthContext.Consumer>
  )
}
