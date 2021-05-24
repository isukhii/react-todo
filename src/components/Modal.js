function Modal(props) {
    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={props.confirm}>Confirm</button>
            <button className="btn" onClick={props.cancel}>Cancel</button>
        </div>
    )
}

export default Modal;