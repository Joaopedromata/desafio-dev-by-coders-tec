import styled from "styled-components"
import { FiChevronUp } from "react-icons/fi"

interface IProps {
  className?: string
}

const Positive: React.FC<IProps> = ({ className }: IProps) => {
  return <FiChevronUp className={className} />
}

export default styled(Positive)`
  color: ${({ theme }) => theme?.color?.positive};
`
