import { ReactNode } from "react"
import styled from "styled-components"

interface IProps {
  className?: string
  children: ReactNode
}

const index: React.FC<IProps> = ({ className, children }: IProps) => {
  return <div className={className}>{children}</div>
}

export default styled(index)`
  background: ${({ theme }) => theme?.color?.secondary};
  padding: 16px;
  border-radius: 8px;
  margin-top: -80px;
`
