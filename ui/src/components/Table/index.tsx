/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from "react"
import styled from "styled-components"

interface IColumn {
  title: string
  accessor: string
  function?: (item: string | number) => any
}

interface IProps {
  className?: string
  columns: IColumn[]
  rows: any[]
}

const Table: React.FC<IProps> = ({ className, columns, rows }: IProps) => {
  return (
    <div className={className}>
      <table>
        <thead>
          <tr>
            {columns?.map(({ title }) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, index) => (
            <tr key={index}>
              {columns?.map(({ accessor, function: func }, index) => (
                <td key={index}>
                  {func ? func(row[accessor]) : row[accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default styled(Table)`
  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 15px;
  }

  thead {
    tr {
      border-bottom: 1px solid ${({ theme }) => theme?.color?.fontPrimary};

      th {
        text-align: start;
        padding: 0px 4px 8px 4px;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 8px 4px;
      }
    }
  }
`
