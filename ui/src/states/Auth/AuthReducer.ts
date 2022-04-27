/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAuthState } from "../../types/auth"

interface AuthActions {
  type:
    | "SIGNIN"
    | "SIGNIN_SUCCESS"
    | "SIGNIN_ERROR"
    | "SIGNUP"
    | "SIGNUP_SUCCESS"
    | "SIGNUP_ERROR"
    | "SEND_CODE"
    | "SEND_CODE_SUCCESS"
    | "SEND_CODE_ERROR"
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
  },
  SIGNUP: {
    isSignUp: true
  },
  SIGNUP_SUCCESS: {
    isSignUp: false
  },
  SIGNUP_ERROR: {
    isSignUp: false,
    authError: payload
  },
  SEND_CODE: {
    isSendingCode: true
  },
  SEND_CODE_SUCCESS: {
    isSendingCode: false
  },
  SEND_CODE_ERROR: {
    isSendingCode: false,
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
