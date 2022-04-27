import { createContext } from "react"
import { IFinanceState } from "../../types/finance"

const initialState: IFinanceState = {
  uploadFile: () => Promise.resolve(),
  getReport: () => Promise.resolve(),
  isUploadingFile: false,
  isGettingReport: false,
  report: {
    totalAmount: 0,
    data: []
  },
  finance: {
    totalAmount: 0,
    data: []
  }
}

const FinanceContext = createContext<IFinanceState>(initialState)
export { FinanceContext, initialState }
