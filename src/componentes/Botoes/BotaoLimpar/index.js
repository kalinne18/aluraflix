import './Limpar.css'
const BotaoLimpar = (props) =>{
    return(
        <button className="btn-limpar">
            {props.texto}
        </button>
    )
}

export default BotaoLimpar