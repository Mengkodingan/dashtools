export default function Breadcrumbs({ children }) {
    return (
        <>
            <div className="text-sm breadcrumbs">
            <ul>
            <li><a href="/"><i className="fa-solid fa-house"></i></a></li>
            {children}
            </ul>
        </div>
        </>
    )
}