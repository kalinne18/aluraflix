import './Guardar.css'

const BotaoGuardar = ({ texto, onSave }) => {
    return (
        <button className="btn-guardar" onClick={onSave}>
            {texto}
        </button>
    );
};

export default BotaoGuardar;