import { ReactNode, useCallback, useReducer } from "react"
import { AuthContext, initialState } from "./AuthContext"
import AuthReducer from "./AuthReducer"
import { Auth } from "aws-amplify"
import { translateCognitoMesssages } from "../../helpers/translateCognitoMessages"
import { ICognitoError } from "../../types/auth"
import { useNavigate } from "react-router-dom"

interface Props {
  children: ReactNode
}

const AuthState: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)
  const navigate = useNavigate()

  const signIn = async (email: string, password: string) => {
    dispatch({
      type: "SIGNIN"
    })

    try {
      const response = await Auth?.signIn({
        username: email,
        password
      })

      dispatch({
        type: "SIGNIN_SUCCESS"
      })

      localStorage.setItem(
        "@finance/token",
        response?.signInUserSession?.idToken?.jwtToken?.toString()
      )

      navigate("/home")
    } catch (error) {
      const { message } = error as ICognitoError
      dispatch({
        type: "SIGNIN_ERROR",
        payload: { message: translateCognitoMesssages(message) }
      })
    }
  }

  const signUp = async (email: string, password: string) => {
    dispatch({
      type: "SIGNUP"
    })

    try {
      await Auth?.signUp({
        username: email,
        password
      })

      dispatch({
        type: "SIGNUP_SUCCESS"
      })

      navigate("/code", {
        state: {
          email
        }
      })
    } catch (error) {
      const { message } = error as ICognitoError
      dispatch({
        type: "SIGNUP_ERROR",
        payload: { message: translateCognitoMesssages(message) }
      })
    }
  }

  const sendCode = async (email: string, code: string) => {
    dispatch({
      type: "SEND_CODE"
    })

    try {
      await Auth?.confirmSignUp(email, code)

      dispatch({
        type: "SEND_CODE_SUCCESS"
      })

      navigate("/")
    } catch (error) {
      const { message } = error as ICognitoError
      dispatch({
        type: "SEND_CODE_ERROR",
        payload: { message: translateCognitoMesssages(message) }
      })
    }
  }

  const logout = useCallback(async () => {
    await Auth?.signOut()

    localStorage?.removeItem("@finance/token")

    navigate("/")
  }, [navigate])

  const contextValue = {
    ...state,
    signIn,
    logout,
    signUp,
    sendCode
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export default AuthState
