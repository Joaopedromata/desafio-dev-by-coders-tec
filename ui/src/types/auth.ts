export interface IAuthState {
  signIn: (email: string, password: string) => Promise<void>
  logout: () => void
  isSignIn: boolean
  authError: IAuthError | undefined
}

export interface IAuthError {
  message: string
}

export interface ICognitoError {
  name: string
  message: string
}
