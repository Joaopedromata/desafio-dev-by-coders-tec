import styled from "styled-components"
import DefaultPage from "../../components/DefaultPage"
import HomeCard from "../../components/HomeCard"
import { FiUpload } from "react-icons/fi"

interface IProps {
  className?: string
}

const Home: React.FC<IProps> = ({ className }: IProps) => {
  return (
    <DefaultPage className={className} title='Home'>
      <div className='home__card--wrapper'>
        <HomeCard
          name='Importar arquivo'
          instruction='Clique aqui e importe um novo arquivo'
          Icon={() => <FiUpload />}
        />
      </div>
    </DefaultPage>
  )
}

export default styled(Home)`
  .home__card--wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }
`
