import { forwardRef, InputHTMLAttributes } from "react"
import styled from "styled-components"

interface IProps extends InputHTMLAttributes<HTMLElement> {
  className?: string
  helperText?: string
  label: string
}

const PrimaryInput = forwardRef<HTMLInputElement, IProps>(
  ({ className, helperText, label, ...rest }: IProps, ref) => {
    return (
      <div className={className}>
        <label htmlFor={rest?.name}>
          <h5>{label}</h5>
          <input {...rest} id={rest?.name} ref={ref} />
          {helperText && <p>{helperText}</p>}
        </label>
      </div>
    )
  }
)

PrimaryInput.displayName = "PrimaryInput"

export default styled(PrimaryInput)`
  display: flex;
  flex-direction: column;
  height: 74px;
  label {
    h5 {
      margin-bottom: 4px;
      font-weight: 600;
    }

    p {
      font-size: 12px;
      color: ${({ theme }) => theme?.color?.negative};
    }
  }

  input {
    width: calc(100% - 12px);
    border: 1px solid ${({ theme }) => theme?.color?.fontPrimary};
    border-radius: 8px;
    padding: 8px 0px 8px 8px;
    outline: none;
  }
`
