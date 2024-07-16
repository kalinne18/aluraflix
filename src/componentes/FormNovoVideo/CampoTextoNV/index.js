import './CampoTextoNV.css'

const CampoTextoNV = (props) => {

    const placeholderModificada = `${props.placeholder}...`   

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo-texto-nv ${props.isTextarea ? 'campo-texto--textarea' : ''}`}>
            <label>{props.label}</label>
            {props.isTextarea ? (
                <textarea placeholder={placeholderModificada} className="textarea" />
            ) : (
                <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
            )}
        </div>
    )
}

export default CampoTextoNV