import { useState } from 'react';
import Botoes from '../Botoes'
import ListaSuspensa from '../ListaSuspensa'
import EditarVideo from './EditarVideo'
import './FormEditarVideo.css'

const FormularioEditarVideo = ({ video, onCancel, onSave }) => {
  const categorias = [
    'FRONT END',
    'BACK END',
    'INOVAÇÃO E GESTÃO',
    'MOBILE',
  ];

  const [titulo, setTitulo] = useState(video.titulo);
  const [categoria, setCategoria] = useState(video.categoria);
  const [videoUrl, setVideoUrl] = useState(video.videoUrl);
  const [descricao, setDescricao] = useState(video.descricao);

  const handleSubmit = (event) => {
    event.preventDefault();
    const videoEditado = { ...video, titulo, categoria, videoUrl, descricao };
    onSave(videoEditado);
    onCancel();
  };

  return (
    <section className='form-editarVideo'>
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={onCancel} className="close-button">&times;</button>
        <h1>EDITAR CARD:</h1>
        <EditarVideo 
          label="Título" 
          placeholder="Digite o título do vídeo" 
          defaultValue={titulo}
          aoAlterado={setTitulo}
        />
        <ListaSuspensa 
          label="Categoria" 
          itens={categorias} 
          valor={categoria}
          aoAlterado={setCategoria}
        />
        <EditarVideo 
          label="Vídeo" 
          placeholder="Digite o endereço do vídeo" 
          defaultValue={videoUrl}
          aoAlterado={setVideoUrl}
        />
        <EditarVideo 
          label="Descrição" 
          placeholder="Digite a descrição do vídeo" 
          isTextarea={true}
          defaultValue={descricao}
          aoAlterado={setDescricao}
        />
        <Botoes type="submit" texto="Guardar" onSave={handleSubmit} />
      </form>
    </section>
  );
};

export default FormularioEditarVideo;