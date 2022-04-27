import { createContext } from "react"
import { IFinanceState } from "../../types/finance"

const initialState: IFinanceState = {
  uploadFile: () => undefined,
  isUploadingFile: false,
  finance: {
    totalAmount: 0,
    data: []
  }
}

const FinanceContext = createContext<IFinanceState>(initialState)
export { FinanceContext, initialState }
