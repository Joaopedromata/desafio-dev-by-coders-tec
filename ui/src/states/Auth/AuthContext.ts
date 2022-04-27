import { createContext } from "react"
import { IAuthState } from "../../types/auth"

const initialState: IAuthState = {
  signIn: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  isSignIn: false,
  authError: undefined
}

const AuthContext = createContext<IAuthState>(initialState)
export { AuthContext, initialState }
