import { useForm } from 'react-hook-form'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
} from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { generateCombinations, getVariables } from '@/lib/logic'
import { useTruthTable } from '@/providers/truth-table-context'

type CreateTruthTableFormSchema = {
    proposition: string
}

export function CreateTruthTableForm() {
    const form = useForm<CreateTruthTableFormSchema>({
        defaultValues: {
            proposition: '',
        },
    })

    const { setValues } = useTruthTable()

    function onSubmit({ proposition }: CreateTruthTableFormSchema) {
        const variables = getVariables(proposition)
        const combos = generateCombinations(variables)

        setValues({ proposition, variables, combos })
    }

    return (
        <Form {...form}>
            <form className="max-w-96" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex space-x-2">
                    <FormField
                        name="proposition"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="p ^ (q ^ r)"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Exemplo: ~p ^ (q ^ r)
                                </FormDescription>
                            </FormItem>
                        )}
                    />
                    <Button className="inline-flex">Gerar</Button>
                </div>
            </form>
        </Form>
    )
}
