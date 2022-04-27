export interface IFinanceState {
  uploadFile: (file: File) => void
  isUploadingFile: boolean
  finance: IFinance
}

export interface IFinance {
  data: IFinanceData[]
  totalAmount: number
}

export interface IFinanceData {
  type: number
  date: string
  value: number
  documentNumber: string
  cardNumber: string
  time: string
  ownerName: string
  storeName: string
}
