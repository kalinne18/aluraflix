import { useState } from 'react'
import Botoes from '../Botoes'
import ListaSuspensa from '../ListaSuspensa'
import CampoTextoNV from './CampoTextoNV'
import './FormNovoVideo.css'

const FormularioNovoVideo = (props) => {
    const [titulo, setTitulo] = useState('');
    const [video, setVideo] = useState('');
    const [categoria, setCategoria] = useState('');

    const salvandoDados = (evento) => {
        evento.preventDefault();
        props.aoVideoCadastrado({
            titulo,
            video,
            categoria,
        });
        setTitulo('');
        setVideo('');
        setCategoria('');
    };

    return (
        <section className='form-NovoVideo'>
            <form onSubmit={salvandoDados}>
                <h1> NOVO VIDEO:</h1>
                <p>PREENCHA O FORMULARIO PARA CRIAR UM NOVO CARD DE VIDEO</p>
                <h2>CRIAR CARD</h2>
                <div className='form-grid'>
                    <CampoTextoNV
                        obrigatorio={true}
                        label="Título"
                        placeholder="Digite o título"
                        valor={titulo}
                        aoAlterado={valor => setTitulo(valor)}
                    />
                    <ListaSuspensa
                        obrigatorio={true}
                        label="Categoria"
                        itens={props.tecnologias}
                        valor={categoria}
                        aoAlterado={valor => setCategoria(valor)}
                    />                
                    <CampoTextoNV
                        obrigatorio={true}
                        label="Vídeo"
                        placeholder="Digite o link do vídeo."
                        valor={video}
                        aoAlterado={valor => setVideo(valor)}
                    />
                    <CampoTextoNV label="Descrição" placeholder="Digite a descrição do vídeo" isTextarea={true} />
                </div>
                <Botoes onSave={salvandoDados} />
            </form>
        </section>
    );
};

export default FormularioNovoVideo;