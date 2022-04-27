import { ReactNode } from "react"
import styled from "styled-components"

interface IProps {
  className?: string
  children: ReactNode
  title: string
}

const DefaultPage: React.FC<IProps> = ({
  className,
  children,
  title
}: IProps) => {
  return (
    <div className={className}>
      <section>
        <header>dsna</header>
        <div className='default_page__title--wrapper'>
          <h1>{title}</h1>
          <div />
        </div>
      </section>
      <div className='default_page__content--container'>{children}</div>
    </div>
  )
}

export default styled(DefaultPage)`
  section {
    background: ${({ theme }) => theme?.color?.primary};
    height: 40vh;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    .default_page__title--wrapper {
      width: auto;
      margin-top: 8vh;
      margin-left: 50px;
      color: ${({ theme }) => theme?.color?.fontSecondary};

      h1 {
        font-size: 42px;
      }

      div {
        height: 4px;
        width: 80%;
        background: ${({ theme }) => theme?.color?.secondary};
      }
    }
  }

  .default_page__content--container {
    padding: 24px 60px;
  }
`
