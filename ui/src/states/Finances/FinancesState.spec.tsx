import { useContext } from "react"
import { FinanceContext } from "./FinancesContext"
import MockAdapter from "axios-mock-adapter"
import api from "../../services/api"
import FinanceState from "./FinancesState"
import { fireEvent, render, waitFor } from "@testing-library/react"
import * as reactToastify from "react-toastify"
import ToastMessage from "../../components/ToastMessage"

const mockUseNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  // prettier-ignore
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockUseNavigate
}))

const apiMock = new MockAdapter(api)

describe("Test for uploadFile function", () => {
  const file = new File([new ArrayBuffer(1)], "file.txt")

  const UploadFileTest = () => {
    const { uploadFile, finance } = useContext(FinanceContext)
    return (
      <>
        <button data-testid='button-test' onClick={() => uploadFile(file)}>
          Click
        </button>
        <div>{JSON.stringify(finance)}</div>
      </>
    )
  }
  it("should send file to api, show response and redirect user to upload/result", async () => {
    const dataMock = {
      data: [
        {
          type: 3,
          date: "2019-03-01",
          value: 142.0,
          document_number: "09620676017",
          card_number: "4753****3153",
          time: "15:34:53",
          owner_name: "JOÃO MACEDO",
          store_name: "BAR DO JOÃO"
        }
      ],
      total_amount: -6253.4800000000005
    }

    apiMock.onPost("finances").reply(201, dataMock, {
      "Content-Type": "application/json"
    })

    const makeSut = () => (
      <FinanceState>
        <UploadFileTest />
      </FinanceState>
    )

    const { getByTestId, getByText } = render(makeSut())

    const buttonTest = getByTestId("button-test")
    fireEvent.click(buttonTest)

    await waitFor(() => {
      expect(getByText(JSON.stringify(dataMock))).toBeTruthy()
      expect(mockUseNavigate).toHaveBeenCalledWith("/upload/result")
    })
  })
})

describe("Test for getReport function", () => {
  const GetReportTest = () => {
    const { getReport, report } = useContext(FinanceContext)
    return (
      <>
        <button data-testid='button-test' onClick={getReport}>
          Click
        </button>
        <div>{JSON.stringify(report)}</div>
      </>
    )
  }
  it("should call getReport and show correct response", async () => {
    const dataMock = {
      data: [
        {
          type: 3,
          date: "2019-03-01",
          value: 142.0,
          document_number: "09620676017",
          card_number: "4753****3153",
          time: "15:34:53",
          owner_name: "JOÃO MACEDO",
          store_name: "BAR DO JOÃO"
        }
      ],
      total_amount: -6253.4800000000005
    }

    apiMock.onGet("finances").reply(200, dataMock, {
      "Content-Type": "application/json"
    })

    const makeSut = () => (
      <FinanceState>
        <GetReportTest />
      </FinanceState>
    )

    const { getByTestId, getByText } = render(makeSut())

    const buttonTest = getByTestId("button-test")
    fireEvent.click(buttonTest)

    await waitFor(() => {
      expect(getByText(JSON.stringify(dataMock))).toBeTruthy()
    })
  })
})
