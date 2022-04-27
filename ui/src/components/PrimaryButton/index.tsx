import { ButtonHTMLAttributes, ReactNode } from "react"
import styled from "styled-components"
import { FiLoader } from "react-icons/fi"

interface IProps extends ButtonHTMLAttributes<HTMLElement> {
  className?: string
  children: ReactNode
  isLoading?: boolean
}

const PrimaryButton: React.FC<IProps> = ({
  className,
  children,
  isLoading,
  ...rest
}: IProps) => {
  return (
    <button className={className} {...rest}>
      {isLoading ? <FiLoader /> : children}
    </button>
  )
}

export default styled(PrimaryButton)`
  svg {
    animation: rotation 4s infinite linear;
    height: 18px;
    width: 18px;

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  }

  height: 30px;
  font-size: 14px;
  font-weight: 600;

  border: none;
  border-radius: 8px;

  background: ${({ theme }) => theme?.color?.tertiary};
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    filter: brightness(95%);
    transform: scale(1.01);
  }
`
