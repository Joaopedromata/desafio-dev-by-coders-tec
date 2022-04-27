export interface IAuthState {
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  sendCode: (email: string, code: string) => Promise<void>
  logout: () => void
  isSignIn: boolean
  isSignUp: boolean
  isSendingCode: boolean
  authError: IAuthError | undefined
}

export interface IAuthError {
  message: string
}

export interface ICognitoError {
  name: string
  message: string
}
