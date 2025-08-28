import {QuartzComponent, QuartzComponentConstructor, QuartzComponentProps} from "./types"
import style from "./styles/footer.scss"


interface Options {
    links: Record<string, string>
}

export default ((opts?: Options) => {
    const Footer: QuartzComponent = ({displayClass, cfg}: QuartzComponentProps) => {
        const year = new Date().getFullYear()

        return (
            <footer class = {`${displayClass ?? ""}`}>
                <p>
                    nutphy © {year} <a href="mailto:physics@nutphy.com">Send email physics@nutphy.com</a>
                </p>


            </footer>

        )
    }

    Footer.css = style
    return Footer
}) satisfies QuartzComponentConstructor
