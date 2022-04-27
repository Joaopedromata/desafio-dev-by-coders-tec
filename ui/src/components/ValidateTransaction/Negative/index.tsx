import styled from "styled-components"
import { FiChevronDown } from "react-icons/fi"

interface IProps {
  className?: string
}

const Negative: React.FC<IProps> = ({ className }: IProps) => {
  return <FiChevronDown className={className} />
}

export default styled(Negative)`
  color: ${({ theme }) => theme?.color?.negative};
`
