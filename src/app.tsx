import { CreateTruthTableForm } from './components/create-truth-table-form'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { InfoAccordion } from './components/info-accordion'
import { TruthTable } from './components/truth-table'

export function App() {
    return (
        <>
            <Header />
            <main className="flex flex-1 justify-between">
                <div>
                    <CreateTruthTableForm />
                    <InfoAccordion />
                </div>
                <div>
                    <TruthTable />
                </div>
            </main>
            <Footer />
        </>
    )
}
