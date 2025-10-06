import { useTruthTable } from '@/providers/truth-table-context'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from './ui/table'
import { evaluate } from '@/lib/logic'

export function TruthTable() {
    const { values } = useTruthTable()

    if (
        !values.combos ||
        !values.proposition ||
        values.variables.length === 0
    ) {
        return (
            <div className="p-4 text-gray-500 italic">
                Nenhuma proposição definida ainda.
            </div>
        )
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {values.variables.map((variable, i) => (
                        <TableHead key={i}>{variable}</TableHead>
                    ))}
                    <TableHead>{values.proposition}</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {values.combos.map((row, i) => {
                    const result = evaluate(values.proposition!, row)
                    return (
                        <TableRow key={i}>
                            {values.variables.map(v => (
                                <TableCell key={v}>
                                    {row[v] ? 'V' : 'F'}
                                </TableCell>
                            ))}
                            <TableCell>{result ? 'V' : 'F'}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}
