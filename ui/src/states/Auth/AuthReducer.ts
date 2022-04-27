/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAuthState } from "../../types/auth"

interface AuthActions {
  type: "SIGNIN" | "SIGNIN_SUCCESS" | "SIGNIN_ERROR"
  payload?: any
}

const actionHandler = (
  payload: any
): { [key: string]: Partial<IAuthState> } => ({
  SIGNIN: {
    isSignIn: true
  },
  SIGNIN_SUCCESS: {
    isSignIn: false
  },
  SIGNIN_ERROR: {
    isSignIn: false,
    authError: payload
  }
})

const AuthReducer = (state: IAuthState, action: AuthActions): IAuthState => {
  const updatedProperties = actionHandler(action.payload)[action.type]
  return {
    ...state,
    ...updatedProperties
  }
}

export default AuthReducer
