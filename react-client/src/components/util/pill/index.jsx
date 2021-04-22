import './pill.css';

const Pill = ({title, id, closeHandle}) => {
    return (
        <div className="pill-wrapper">
            <span>{title}</span>
            <span className="material-icons md-18" onClick={(e) => closeHandle(e, id)}>close</span>
        </div>
    )
}

export default Pill;