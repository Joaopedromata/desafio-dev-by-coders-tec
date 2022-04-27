import { useEffect } from "react"
import { useContext } from "react"
import styled from "styled-components"
import DefaultCard from "../../components/DefaultCard"
import DefaultPage from "../../components/DefaultPage"
import Table from "../../components/Table"
import { validateTransaction } from "../../helpers/validateTransaction"
import { FinanceContext } from "../../states/Finances/FinancesContext"
import { formatDate } from "../../utils/date"
import { formatDocumentNumber } from "../../utils/document"
import { formatValue } from "../../utils/number"
import { FiLoader } from "react-icons/fi"

interface IProps {
  className?: string
}

const Report: React.FC<IProps> = ({ className }: IProps) => {
  const { getReport, isGettingReport, report } = useContext(FinanceContext)

  useEffect(() => {
    getReport()
  }, [getReport])

  const columns = [
    { title: "Tipo", accessor: "type" },
    { title: "Data", accessor: "date", function: formatDate },
    { title: "Valor", accessor: "value", function: formatValue },
    {
      title: "CPF",
      accessor: "documentNumber",
      function: formatDocumentNumber
    },
    { title: "Cartão", accessor: "cardNumber" },
    { title: "Horário", accessor: "time" },
    { title: "Proprietário", accessor: "ownerName" },
    { title: "Loja", accessor: "storeName" },
    {
      title: "Status",
      accessor: "type",
      function: validateTransaction
    }
  ]

  return (
    <DefaultPage className={className} title='Relatório' back='/'>
      <DefaultCard>
        {isGettingReport ? (
          <div className='report__loader--wrapper'>
            <FiLoader />
          </div>
        ) : (
          <>
            <Table columns={columns} rows={report?.data} />
            <div className={"report__result--wrapper"}>
              <h6>Saldo:</h6>
              <h6 className={report?.totalAmount < 0 ? "negative" : "positive"}>
                {formatValue(report?.totalAmount)}
              </h6>
            </div>
          </>
        )}
      </DefaultCard>
    </DefaultPage>
  )
}

export default styled(Report)`
  .report__loader--wrapper {
    width: 60vw;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;

    svg {
      animation: rotation 4s infinite linear;
      height: 48px;
      width: 48px;

      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }
  }

  .report__result--wrapper {
    h6 {
      font-size: 16px;
      padding: 4px;
    }

    display: flex;
  }
  .negative {
    color: ${({ theme }) => theme?.color?.negative};
  }

  .positive {
    color: ${({ theme }) => theme?.color?.positive};
  }
`
