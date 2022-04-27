import { ReactNode } from "react"
import styled from "styled-components"
import DefaultCard from "../DefaultCard"

interface IProps {
  className?: string
  children: ReactNode
}

const AuthPage: React.FC<IProps> = ({ className, children }: IProps) => {
  return (
    <div className={className}>
      <DefaultCard>{children}</DefaultCard>
    </div>
  )
}

export default styled(AuthPage)`
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme?.color?.primary};

  display: flex;
  align-items: center;
  justify-content: center;
`
