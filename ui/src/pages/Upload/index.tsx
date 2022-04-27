import styled from "styled-components"
import DefaultCard from "../../components/DefaultCard"
import DefaultPage from "../../components/DefaultPage"
import { useDropzone } from "react-dropzone"
import { FiUploadCloud, FiLoader } from "react-icons/fi"
import { toast } from "react-toastify"
import { useContext } from "react"
import { FinanceContext } from "../../states/Finances/FinancesContext"

interface IProps {
  className?: string
}

const Upload: React.FC<IProps> = ({ className }: IProps) => {
  const { uploadFile, isUploadingFile } = useContext(FinanceContext)
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: ".txt",
    onDropAccepted: (acceptedFiles) => {
      uploadFile(acceptedFiles[0])
    },
    onDropRejected: () => {
      toast.error("Somente arquivos com a extensão .txt")
    }
  })

  return (
    <DefaultPage className={className} title='Importar arquivo' back='/home'>
      <DefaultCard>
        <div className='upload__drag-and-drop--wrapper' {...getRootProps()}>
          <input {...getInputProps()} />
          <div className='upload__drag-and-drop__text--wrapper'>
            {isUploadingFile ? (
              <FiLoader className='upload__drag-and-drop__icon--loader' />
            ) : (
              <FiUploadCloud />
            )}
            <p>Arraste o arquivo ou clique aqui.</p>
          </div>
        </div>
      </DefaultCard>
    </DefaultPage>
  )
}

export default styled(Upload)`
  .upload__drag-and-drop--wrapper {
    cursor: pointer;
    width: 410px;
    height: 200px;
    border-radius: 8px;
    border: 6px dashed ${({ theme }) => theme?.color?.fontPrimary};

    display: flex;
    align-items: center;
    justify-content: center;

    .upload__drag-and-drop__text--wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .upload__drag-and-drop__icon--loader {
        animation: rotation 4s infinite linear;

        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(359deg);
          }
        }
      }

      svg {
        height: 48px;
        width: 48px;
      }
      p {
        font-size: 18px;
      }
    }
  }
`
