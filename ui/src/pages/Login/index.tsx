import { Link } from "react-router-dom"
import styled from "styled-components"
import AuthPage from "../../components/AuthPage"
import DefaultCard from "../../components/DefaultCard"
import PrimaryButton from "../../components/PrimaryButton"
import PrimaryInput from "../../components/PrimaryInput"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { AuthContext } from "../../states/Auth/AuthContext"

interface ILoginInput {
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

const Login: React.FC<IProps> = ({ className }: IProps) => {
  const { signIn, isSignIn, authError } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginInput>({
    resolver: yupResolver(schema)
  })

  return (
    <AuthPage className={className}>
      <DefaultCard>
        <form
          onSubmit={handleSubmit(({ email, password }) =>
            signIn(email, password)
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
          <Link to=''>Ainda não tenho conta</Link>
          <PrimaryButton type='submit' isLoading={isSignIn}>
            Entrar
          </PrimaryButton>
        </form>
      </DefaultCard>
    </AuthPage>
  )
}

export default styled(Login)`
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme?.color?.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    a {
      margin-bottom: 8px;
      width: 100%;
      text-align: center;
      color: ${({ theme }) => theme?.color?.fontPrimary};
      font-size: 14px;
      font-weight: 400;
    }
  }
`
