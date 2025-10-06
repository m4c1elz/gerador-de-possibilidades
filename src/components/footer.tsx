import SonicSilhouetteImage from '@/assets/sonic silhouette.png'

export function Footer() {
    return (
        <footer className="flex items-center gap-6">
            <img src={SonicSilhouetteImage} className="h-10" />
            <p className="font-mono font-semibold">
                {' '}
                // desenvolvido por maciel.
            </p>
        </footer>
    )
}
