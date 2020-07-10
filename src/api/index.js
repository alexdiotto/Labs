import { RCK_IDENTITY_HOST_BASE_URL, RCK_API_ACCOUNT_BASE_URL, RCK_PRESENTATION_BASE_URL } from 'constants/urls'
import { destroyUserToken, getUserToken, getIdToken, storeAuthRedirect } from 'utils/local-storage.utils'
import objectToQueryString from 'utils/object-to-query-string.utils'

export function redirectToLogin() {
  const authRedirect = RCK_PRESENTATION_BASE_URL + window.location.pathname + window.location.search
  storeAuthRedirect(authRedirect)

  const nonce = 'Ni' + Math.random() + '' + Date.now()
  const state = Date.now() + '' + Math.random()
  const userManagerConfig = {
    client_id: 'rck-front',
    redirect_uri: RCK_PRESENTATION_BASE_URL,
    response_type: 'id_token token',
    scope: 'openid profile FunnelApi IdentityApi',
    authority: RCK_IDENTITY_HOST_BASE_URL,
    post_logout_redirect_uri: RCK_PRESENTATION_BASE_URL + window.location.pathname + window.location.search,
    nonce,
    state
  }

  authorize(userManagerConfig)
}

export function authorize (config) {
  const query = objectToQueryString(config)
  const url = `${RCK_IDENTITY_HOST_BASE_URL}/connect/authorize?${query}`

  window.location = url
}

export function endSession () {
  const idToken = getIdToken()
  const url = `${RCK_IDENTITY_HOST_BASE_URL}/connect/endsession?id_token_hint=${idToken}&post_logout_redirect_uri=${RCK_PRESENTATION_BASE_URL}`

  destroyUserToken()

  window.location = url
}

export function getUserInfo () {
  const url = `${RCK_IDENTITY_HOST_BASE_URL}/connect/userinfo`
  const token = getUserToken()

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
}

export async function checkToken () {
  const url = RCK_API_ACCOUNT_BASE_URL 
  const token = getUserToken()
  const query = `{
    checkUserLogged{
      tenantId
      username
    }
  }`

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  return response
}
