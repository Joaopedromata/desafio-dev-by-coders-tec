import { createContext } from "react"
import { IAuthState } from "../../types/auth"

const initialState: IAuthState = {
  signIn: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  sendCode: () => Promise.resolve(),
  isSendingCode: false,
  isSignIn: false,
  isSignUp: false,
  authError: undefined
}

const AuthContext = createContext<IAuthState>(initialState)
export { AuthContext, initialState }
