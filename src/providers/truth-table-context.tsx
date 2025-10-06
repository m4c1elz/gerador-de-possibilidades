import {
    createContext,
    useContext,
    useState,
    type Dispatch,
    type PropsWithChildren,
    type SetStateAction,
} from 'react'

type TruthTableData = {
    proposition: string | null
    variables: string[]
    combos: Record<string, boolean>[] | null
}

type TruthTableContextValue = {
    values: TruthTableData
    setValues: Dispatch<SetStateAction<TruthTableData>>
}

const TruthTableContext = createContext<TruthTableContextValue | null>(null)

type TruthTableProviderProps = PropsWithChildren

export function TruthTableProvider({ children }: TruthTableProviderProps) {
    const [values, setValues] = useState<TruthTableData>({
        proposition: null,
        variables: [],
        combos: null,
    })

    return (
        <TruthTableContext value={{ values, setValues }}>
            {children}
        </TruthTableContext>
    )
}

export function useTruthTable() {
    const context = useContext(TruthTableContext)

    if (!context) {
        throw new Error()
    }

    return context
}
