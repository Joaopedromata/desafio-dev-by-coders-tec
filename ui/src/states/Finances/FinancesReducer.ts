/* eslint-disable @typescript-eslint/no-explicit-any */
import { IFinanceState } from "../../types/finance"

interface FinanceActions {
  type:
    | "UPLOAD_FILE"
    | "UPLOAD_FILE_SUCCESS"
    | "UPLOAD_FILE_ERROR"
    | "GET_REPORT"
    | "GET_REPORT_SUCCESS"
    | "GET_REPORT_ERROR"
  payload?: any
}

const actionHandler = (
  payload: any
): { [key: string]: Partial<IFinanceState> } => ({
  UPLOAD_FILE: {
    isUploadingFile: true
  },
  UPLOAD_FILE_SUCCESS: {
    isUploadingFile: false,
    finance: payload
  },
  UPLOAD_FILE_ERROR: {
    isUploadingFile: false
  },
  GET_REPORT: {
    isGettingReport: true
  },
  GET_REPORT_SUCCESS: {
    isGettingReport: false,
    report: payload
  },
  GET_REPORT_ERROR: {
    isGettingReport: false
  }
})

const FinanceReducer = (
  state: IFinanceState,
  action: FinanceActions
): IFinanceState => {
  const updatedProperties = actionHandler(action.payload)[action.type]
  return {
    ...state,
    ...updatedProperties
  }
}

export default FinanceReducer
