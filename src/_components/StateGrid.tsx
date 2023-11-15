import { useAtom, useAtomValue } from "jotai";
import { colAtom, rowAtom } from "~/_state/gridState";

export interface StateGridProps {
    rows: number;
    cols: number;
}

export function StateGrid({rows, cols}: StateGridProps) {
    const rowArray = Array.from(Array(rows).keys())
    const colArray = Array.from(Array(cols).keys())

    console.log(`render StateGrid(${rows}, ${cols})`)
    return <div className="flex flex-col gap-2 text-xl text-right">
        <div className="flex flex-row gap-2">
            <div className="basis-0 grow" />
            {
                colArray.map(col => <StateGridColLabel key={col} col={col} />)
            }
        </div>
        {
            rowArray.map(row =>
                <div key={row} className="flex flex-row gap-2">
                    <StateGridRowLabel row={row} />
                    {
                        colArray.map(col => <StateGridCell key={col} row={row} col={col}/>)
                    }
                </div>
                )
        }
    </div>
}

export interface StateGridRowLabelProps {
    row: number;
}

export function StateGridRowLabel({row}: StateGridRowLabelProps) {
    const [rowVal, setRowVal] = useAtom(rowAtom(row))

    console.log(`render StateGridRowLabel(${row})`)
    return <button className="basis-0 grow font-bold cursor-pointer hover:bg-gray-300" onClick={() => setRowVal((state) => state + 1)}>
        {
            rowVal
        }
    </button>
}

export interface StateGridColLabelProps {
    col: number;
}

export function StateGridColLabel({col}: StateGridColLabelProps) {
    const [colVal, setColVal] = useAtom(colAtom(col))

    console.log(`render StateGridColLabel(${col})`)
    return <button className="basis-0 grow font-bold cursor-pointer hover:bg-gray-300" onClick={() => setColVal((state) => state + 10)}>
        {
            colVal
        }
    </button>
}


export interface StateGridCellProps {
    row: number;
    col: number;
}

export function StateGridCell({row, col}: StateGridCellProps) {
    const rowVal = useAtomValue(rowAtom(row))
    const colVal = useAtomValue(colAtom(col))

    console.log(`render StateGridCell(${row}, ${col})`)
    return <div className="basis-0 grow">
        {
            rowVal + colVal
        }
    </div>
}