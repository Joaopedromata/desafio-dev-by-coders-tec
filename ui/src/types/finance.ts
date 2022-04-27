export interface IFinanceState {
  uploadFile: (file: File) => Promise<void>
  getReport: () => Promise<void>
  isUploadingFile: boolean
  isGettingReport: boolean
  finance: IFinance
  report: IFinance
}

export interface IFinance {
  data: IFinanceData[]
  totalAmount: number
}

export interface IFinanceData {
  id?: string
  type: number
  date: string
  value: number
  documentNumber: string
  cardNumber: string
  time: string
  ownerName: string
  storeName: string
}
