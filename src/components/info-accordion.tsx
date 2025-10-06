import {
    Accordion,
    AccordionItem,
    AccordionContent,
    AccordionTrigger,
} from './ui/accordion'

export function InfoAccordion() {
    return (
        <Accordion type="multiple" className="w-[300px]">
            <AccordionItem value="item-1">
                <AccordionTrigger>Pra que serve este site?</AccordionTrigger>
                <AccordionContent>
                    Este site pega uma proposição lógica e automaticamente gera
                    a tabela de possibilidades com base nos elementos
                    fornecidos.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    O que são proposições lógicas?
                </AccordionTrigger>
                <AccordionContent>
                    As proposições são palavras ou símbolos que expressam um
                    pensamento com um sentido completo e indicam afirmações de
                    fatos ou de ideias. Essas afirmações assumem valores lógicos
                    que podem ser verdadeiros ou falsos e para representar uma
                    proposição usualmente utilizamos as letras p e q.
                    <p className="text-foreground/50 pt-2 text-xs">
                        (Fonte: Toda Matéria)
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>
                    Quais são os símbolos que posso digitar?
                </AccordionTrigger>
                <AccordionContent>
                    <ul className="decoration-foreground">
                        <li className="list-disc">E: ^</li>
                        <li>Ou: v</li>
                        <li>Se, então: →</li>
                        <li>E: ^</li>
                        <li>Se, somente se: {'←>'}</li>
                        <li>Negação: ~</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
