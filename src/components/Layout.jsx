export default function Layout(props){
// to tell the prarent about the chidren components that needs to be rendered we use props
    const {children}=props

    const header =(
        <header>
            <h1 className="text-gradient">InnerFit</h1>
            <p><strong> A 30 Days Simple Workout Program</strong> </p>
        </header>
    )
    const footer =(
        <footer>
         <p>Build by <a href="" target="_blank">Shradha Singh</a><br/>Styled with <a href="" target="_blank">FantaCSS</a></p>
        </footer>
    )
    return(
        <>
        {header}
        {children}
        {footer}
        </>
    )
}