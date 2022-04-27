import { useEffect } from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import DefaultCard from "../../components/DefaultCard"
import DefaultPage from "../../components/DefaultPage"
import Table from "../../components/Table"
import { validateTransaction } from "../../helpers/validateTransaction"
import { FinanceContext } from "../../states/Finances/FinancesContext"
import { formatDate } from "../../utils/date"
import { formatDocumentNumber } from "../../utils/document"
import { formatValue } from "../../utils/number"

interface IProps {
  className?: string
}

const UploadResult: React.FC<IProps> = ({ className }: IProps) => {
  const { finance } = useContext(FinanceContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (finance?.data?.length === 0) {
      navigate("/")
    }
  }, [finance, navigate])

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
    <DefaultPage className={className} title='Resultado' back='/upload'>
      <DefaultCard>
        <Table columns={columns} rows={finance?.data} />
      </DefaultCard>
    </DefaultPage>
  )
}

export default styled(UploadResult)``
