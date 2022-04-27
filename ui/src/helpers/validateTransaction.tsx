import { ReactElement } from "react"
import Negative from "../components/ValidateTransaction/Negative"
import Positive from "../components/ValidateTransaction/Positive"

export const validateTransaction = (type: number | string): ReactElement => {
  const formatType = typeof type === "string" ? parseInt(type) : type

  switch (formatType) {
    case 1:
      return <Positive />
    case 2:
      return <Negative />
    case 3:
      return <Negative />
    case 4:
      return <Positive />
    case 5:
      return <Positive />
    case 6:
      return <Positive />
    case 7:
      return <Positive />
    case 8:
      return <Positive />
    case 9:
      return <Negative />
    default:
      return <div />
  }
}
