import React from 'react'
import useQuery from '../../hooks/use-query'
import { Redirect } from 'react-router-dom'
import { getLink } from '../../util/contentful-oauth'
import { AuthContext } from '../../store/AuthStore/AuthStore'

export default function Login() {
  const query = useQuery()
  let accessToken = query.get('access_token')

  if (!accessToken) {
    window.location = getLink()
  }

  return (
    <div>
      Logging in...
      {accessToken ? (
        <AuthContext.Consumer>
          {({ login }) => {
            login(accessToken)
            return <Redirect to="/" />
          }}
        </AuthContext.Consumer>
      ) : null}
    </div>
  )
}
