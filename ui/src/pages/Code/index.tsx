import styled from "styled-components"
import AuthPage from "../../components/AuthPage"
import PrimaryButton from "../../components/PrimaryButton"
import PrimaryInput from "../../components/PrimaryInput"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { AuthContext } from "../../states/Auth/AuthContext"
import { useLocation } from "react-router-dom"

interface ICodeInput {
  code: string
}

interface IProps {
  className?: string
}

interface ICodeState {
  email: string
}

const schema = yup.object().shape({
  code: yup.string().required("Digite o código")
})

const Code: React.FC<IProps> = ({ className }: IProps) => {
  const { authError, sendCode, isSendingCode } = useContext(AuthContext)

  const { state } = useLocation()

  const { email } = state as ICodeState

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ICodeInput>({
    resolver: yupResolver(schema)
  })

  return (
    <AuthPage className={className}>
      <form onSubmit={handleSubmit(({ code }) => sendCode(email, code))}>
        <p>Digite aqui o código enviado ao seu email</p>
        <PrimaryInput
          label='Código'
          helperText={
            (errors?.code && errors?.code?.message) || authError?.message
          }
          {...register("code")}
        />
        <PrimaryButton type='submit' isLoading={isSendingCode}>
          Entrar
        </PrimaryButton>
      </form>
    </AuthPage>
  )
}

export default styled(Code)`
  form {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`
