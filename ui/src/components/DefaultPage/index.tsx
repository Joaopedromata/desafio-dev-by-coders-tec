import { ReactNode } from "react"
import styled from "styled-components"
import { FiArrowLeft, FiLogOut } from "react-icons/fi"
import { Navigate, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../states/Auth/AuthContext"

interface IProps {
  className?: string
  children: ReactNode
  title: string
  back?: string
}

const DefaultPage: React.FC<IProps> = ({
  className,
  children,
  title,
  back
}: IProps) => {
  const navigate = useNavigate()
  const { logout } = useContext(AuthContext)

  const token = localStorage?.getItem("@finance/token")

  return (
    <>
      {token ? (
        <div className={className}>
          <section>
            <header>
              {back ? <FiArrowLeft onClick={() => navigate(back)} /> : <div />}
              <FiLogOut onClick={logout} />
            </header>
            <div className='default_page__title--wrapper'>
              <h1>{title}</h1>
              <div />
            </div>
          </section>
          <div className='default_page__content--container'>{children}</div>
        </div>
      ) : (
        <Navigate to='/' />
      )}
    </>
  )
}

export default styled(DefaultPage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    header {
      width: calc(100% - 80px);
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0 40px;
      height: 50px;
      svg {
        height: 32px;
        width: 32px;
        color: ${({ theme }) => theme?.color?.secondary};
        transition: all 300ms;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
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
    max-width: 1000px;
  }
`
