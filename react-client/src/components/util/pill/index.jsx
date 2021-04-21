const Pill = ({title, key, closeHandle}) => {
    return (
        <div className="pill-wrapper">
            {console.log(title)}
            {console.log(key)}
            {console.log(closeHandle)}
            <h2>Pill</h2>
            {/* <span>{title}</span>
            <span className="material-icons md-18" onClick={(e) => closeHandle(e, key)}>close</span> */}
        </div>
    )
}

export default Pill;