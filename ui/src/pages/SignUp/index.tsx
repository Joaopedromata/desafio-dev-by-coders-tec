import { useContext } from "react"
import styled from "styled-components"
import AuthPage from "../../components/AuthPage"
import PrimaryInput from "../../components/PrimaryInput"
import { AuthContext } from "../../states/Auth/AuthContext"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import PrimaryButton from "../../components/PrimaryButton"

interface IPasswordInput {
  email: string
  password: string
}

interface IProps {
  className?: string
}

const schema = yup.object().shape({
  email: yup.string().email().required("Digite seu email"),
  password: yup.string().required("Digite sua senha")
})

const SignUp: React.FC<IProps> = ({ className }: IProps) => {
  const { authError, signUp, isSignUp } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IPasswordInput>({
    resolver: yupResolver(schema)
  })
  return (
    <AuthPage className={className}>
      <form
        onSubmit={handleSubmit(({ email, password }) =>
          signUp(email, password)
        )}
      >
        <PrimaryInput
          {...register("email")}
          label='Email'
          type='email'
          helperText={
            (errors?.email && errors?.email?.message) || authError?.message
          }
        />
        <PrimaryInput
          label='Senha'
          type='password'
          helperText={
            (errors?.password && errors?.password?.message) ||
            authError?.message
          }
          {...register("password")}
        />
        <PrimaryButton type='submit' isLoading={isSignUp}>
          Criar Conta
        </PrimaryButton>
      </form>
    </AuthPage>
  )
}

export default styled(SignUp)`
  form {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`
