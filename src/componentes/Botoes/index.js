import BotaoGuardar from './BotaoGuardar'
import BotaoLimpar from './BotaoLimpar'
import './Botoes.css'

const Botoes = ({ onSave }) => {
    return (
        <section className='botoes-editar-video'>
            <BotaoGuardar texto="Guardar" onSave={onSave} />
            <BotaoLimpar texto="Limpar" />
        </section>
    );
};

export default Botoes;
  
