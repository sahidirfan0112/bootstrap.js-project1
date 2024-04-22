export default function Header(props) {
    let {headingTitle} = props
    return (
        <>
            <div className="fw-bold m-5">{headingTitle}</div>
        </>
    )
}