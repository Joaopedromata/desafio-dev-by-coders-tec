import { ReactNode, useCallback, useReducer } from "react"
import api from "../../services/api"
import { FinanceContext, initialState } from "./FinancesContext"
import FinanceReducer from "./FinancesReducer"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

interface Props {
  children: ReactNode
}

const FinanceState: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(FinanceReducer, initialState)
  const navigate = useNavigate()

  const uploadFile = useCallback(async (file: File) => {
    dispatch({
      type: "UPLOAD_FILE"
    })

    const data = new FormData()
    data.append("file", file)

    try {
      const response = await api?.post("finances", data, {
        headers: { "Content-Type": "multipart/form-data" }
      })

      if (response?.status === 201) {
        dispatch({
          type: "UPLOAD_FILE_SUCCESS",
          payload: response?.data
        })
        navigate("/upload/result")
      }
    } catch {
      toast.error("Ocorreu um erro ao fazer a importação do arquivo")
      dispatch({
        type: "UPLOAD_FILE_ERROR"
      })
    }
  }, [])

  const contextValue = {
    ...state,
    uploadFile
  }

  return (
    <FinanceContext.Provider value={contextValue}>
      {children}
    </FinanceContext.Provider>
  )
}

export default FinanceState
