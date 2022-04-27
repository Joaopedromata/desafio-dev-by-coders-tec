import { HTMLAttributes, ReactNode } from "react"
import styled from "styled-components"

interface IProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

const DefaultCard: React.FC<IProps> = ({
  className,
  children,
  ...rest
}: IProps) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

export default styled(DefaultCard)`
  background: ${({ theme }) => theme?.color?.secondary};
  padding: 16px;
  border-radius: 8px;
  margin-top: -80px;
`
