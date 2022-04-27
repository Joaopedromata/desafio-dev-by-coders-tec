import { ComponentType } from "react"
import styled from "styled-components"
import DefaultCard from "../DefaultCard"

interface IProps {
  className?: string
  name: string
  Icon: ComponentType
  instruction: string
}

const HomeCard: React.FC<IProps> = ({
  className,
  name,
  Icon,
  instruction
}: IProps) => {
  return (
    <DefaultCard className={className}>
      <div className='home-card__header--wrapper'>
        <h1>{name}</h1>
        <div />
      </div>
      <div className='home-card__body--wrapper'>
        <Icon />
        <p>{instruction}</p>
      </div>
    </DefaultCard>
  )
}

export default styled(HomeCard)`
  width: 365px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  transition: all 300ms;

  &:hover {
    transform: scale(1.01);
  }

  .home-card__header--wrapper {
    h1 {
      font-size: 30px;
      font-weight: 600;
    }

    div {
      margin-top: 6px;
      height: 3px;
      width: 80%;
      background: ${({ theme }) => theme?.color?.quarternary};
    }
  }

  .home-card__body--wrapper {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 24px;

    svg {
      height: 42px;
      width: 42px;
    }

    p {
      width: 240px;
    }
  }
`
