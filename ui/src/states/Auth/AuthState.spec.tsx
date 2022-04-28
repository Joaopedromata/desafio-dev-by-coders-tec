import { fireEvent, render, waitFor } from "@testing-library/react"
import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import AuthState from "./AuthState"
import { Auth } from "aws-amplify"

const mockUseNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  // prettier-ignore
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockUseNavigate
}))

describe("Test for Signin function", () => {
  const SigninTest = () => {
    const { signIn, authError } = useContext(AuthContext)
    return (
      <>
        <button
          data-testid='button-test'
          onClick={() => signIn("iron@maiden.com.br", "Synyster Gates")}
        >
          Click
        </button>
        <h1>{authError?.message}</h1>
      </>
    )
  }

  it("Should authenticate user and redirect to home page ", async () => {
    const signInReturn = {
      signInUserSession: {
        idToken: {
          jwtToken: "Beatles"
        }
      }
    }

    Auth.signIn = jest.fn().mockImplementation(() => signInReturn)

    const mockLocalStorageSetItem = jest.fn()

    jest.spyOn(window.localStorage.__proto__, "setItem")
    window.localStorage.__proto__.setItem = mockLocalStorageSetItem

    const makeSut = () => (
      <AuthState>
        <SigninTest />
      </AuthState>
    )

    const { getByTestId } = render(makeSut())

    const buttonTest = getByTestId("button-test")
    fireEvent.click(buttonTest)

    await waitFor(() => {
      expect(Auth.signIn).toHaveBeenCalledWith({
        password: "Synyster Gates",
        username: "iron@maiden.com.br"
      })
      expect(mockLocalStorageSetItem).toHaveBeenCalledWith(
        "@finance/token",
        "Beatles"
      )
      expect(mockUseNavigate).toHaveBeenCalledWith("/home")
    })
  })

  it("Should return error message and translate because Cognito return error", async () => {
    Auth.signIn = jest.fn().mockImplementation(() =>
      Promise.reject({
        message: "Incorrect username or password."
      })
    )

    const makeSut = () => (
      <AuthState>
        <SigninTest />
      </AuthState>
    )

    const { getByTestId, getByText } = render(makeSut())

    const buttonTest = getByTestId("button-test")
    fireEvent.click(buttonTest)

    await waitFor(() => {
      expect(Auth.signIn).toHaveBeenCalledWith({
        password: "Synyster Gates",
        username: "iron@maiden.com.br"
      })
      expect(getByText("Usuário ou senha incorreta.")).toBeTruthy()
    })
  })
})

describe("Test for Signup function", () => {
  const SignupTest = () => {
    const { signUp, authError } = useContext(AuthContext)
    return (
      <>
        <button
          data-testid='button-test'
          onClick={() => signUp("iron@maiden.com.br", "Synyster Gates")}
        >
          Click
        </button>
        <h1>{authError?.message}</h1>
      </>
    )
  }

  it("Should create user and redirect user to code page passing email", async () => {
    Auth.signUp = jest.fn().mockImplementation(jest.fn())

    const makeSut = () => (
      <AuthState>
        <SignupTest />
      </AuthState>
    )

    const { getByTestId } = render(makeSut())

    const buttonTest = getByTestId("button-test")
    fireEvent.click(buttonTest)

    await waitFor(() => {
      expect(Auth.signUp).toHaveBeenCalledWith({
        password: "Synyster Gates",
        username: "iron@maiden.com.br"
      })
      expect(mockUseNavigate).toHaveBeenCalledWith("/code", {
        state: { email: "iron@maiden.com.br" }
      })
    })
  })

  it("Should return error message and translate because Cognito return error", async () => {
    Auth.signUp = jest.fn().mockImplementation(() =>
      Promise.reject({
        message: "An account with the given email already exists."
      })
    )

    const makeSut = () => (
      <AuthState>
        <SignupTest />
      </AuthState>
    )

    const { getByTestId, getByText } = render(makeSut())

    const buttonTest = getByTestId("button-test")
    fireEvent.click(buttonTest)

    await waitFor(() => {
      expect(Auth.signUp).toHaveBeenCalledWith({
        password: "Synyster Gates",
        username: "iron@maiden.com.br"
      })
      expect(getByText("Já existe uma conta com este email")).toBeTruthy()
    })
  })
})

describe("Test for sendCode function", () => {
  const SendCodeTest = () => {
    const { sendCode, authError } = useContext(AuthContext)
    return (
      <>
        <button
          data-testid='button-test'
          onClick={() => sendCode("iron@maiden.com.br", "12345")}
        >
          Click
        </button>
        <h1>{authError?.message}</h1>
      </>
    )
  }

  it("Should send confirmation code and redirect user to signin page", async () => {
    Auth.confirmSignUp = jest.fn().mockImplementation(jest.fn())

    const mockLocalStorageRemoveItem = jest.fn()

    jest.spyOn(window.localStorage.__proto__, "setItem")
    window.localStorage.__proto__.removeItem = mockLocalStorageRemoveItem

    const makeSut = () => (
      <AuthState>
        <SendCodeTest />
      </AuthState>
    )

    const { getByTestId } = render(makeSut())

    const buttonTest = getByTestId("button-test")
    fireEvent.click(buttonTest)

    await waitFor(() => {
      expect(Auth.confirmSignUp).toHaveBeenCalledWith(
        "iron@maiden.com.br",
        "12345"
      )
      expect(mockUseNavigate).toHaveBeenCalledWith("/")
    })
  })

  it("Should return default error message because Cognito return error", async () => {
    Auth.confirmSignUp = jest.fn().mockImplementation(() =>
      Promise.reject({
        message: "any"
      })
    )

    const makeSut = () => (
      <AuthState>
        <SendCodeTest />
      </AuthState>
    )

    const { getByTestId, getByText } = render(makeSut())

    const buttonTest = getByTestId("button-test")
    fireEvent.click(buttonTest)

    await waitFor(() => {
      expect(Auth.confirmSignUp).toHaveBeenCalledWith(
        "iron@maiden.com.br",
        "12345"
      )
      expect(getByText("Ocorreu um erro")).toBeTruthy()
    })
  })
})

describe("Test for logout function", () => {
  const LogoutTest = () => {
    const { logout } = useContext(AuthContext)
    return (
      <>
        <button data-testid='button-test' onClick={logout}>
          Click
        </button>
      </>
    )
  }

  it("Should do logout, remove item from localStorage and redirect user to login page", async () => {
    Auth.signOut = jest.fn().mockImplementation(jest.fn())

    const makeSut = () => (
      <AuthState>
        <LogoutTest />
      </AuthState>
    )

    const { getByTestId } = render(makeSut())

    const buttonTest = getByTestId("button-test")
    fireEvent.click(buttonTest)

    await waitFor(() => {
      expect(Auth.signOut).toHaveBeenCalledTimes(1)
      expect(mockUseNavigate).toHaveBeenCalledWith("/")
    })
  })
})
