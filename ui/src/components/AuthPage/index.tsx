import { ReactNode } from "react"
import styled from "styled-components"

interface IProps {
  className?: string
  children: ReactNode
}

const AuthPage: React.FC<IProps> = ({ className, children }: IProps) => {
  return <div className={className}>{children}</div>
}

export default styled(AuthPage)``
