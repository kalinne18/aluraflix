import { useState } from 'react';
import FormularioEditarVideo from '../Formulario';
import styles from './CardVideos.module.css';

const CardVideos = ({ videoUrl, onDelete, onEdit, titulo, corDecoracao }) => {
    const [modoEdicao, setModoEdicao] = useState(false);
    const [dadosVideo, setDadosVideo] = useState(null);

    const clickEditar = () => {
        const video = { titulo, videoUrl, corDecoracao };
        setDadosVideo(video);
        onEdit(video);
        setModoEdicao(true);
    };

    const cancelarEdicao = () => {
        setModoEdicao(false);
        setDadosVideo(null);
    };

    const salvarEdicao = (videoEditado) => {
        console.log("Video editado:", videoEditado);
        setDadosVideo(videoEditado); 
        setModoEdicao(false); 
    };
    
    return (
        <div className={styles.card} style={{ borderColor: corDecoracao, boxShadow: `inset 0 0 12px 4px ${corDecoracao}` }}>
            {modoEdicao ? (
                <FormularioEditarVideo video={dadosVideo} onCancel={cancelarEdicao} onSave={salvarEdicao} />
            ) : (
                <>
                    <div className={styles.videoContainer} style={{ borderColor: corDecoracao }}>
                        <div className={styles.videoWrapper}>
                            <iframe
                                src={videoUrl}
                                title={titulo}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className={styles.botoes}>
                        <div className={styles.btnAction} onClick={onDelete}>
                            <img src="./img/delete.png" alt='Delete' />
                            <span>Delete</span>
                        </div>
                        <div className={styles.btnAction} onClick={clickEditar}>
                            <img src="./img/editar.png" alt='Editar' />
                            <span>Editar</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CardVideos;