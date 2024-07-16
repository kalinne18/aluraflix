import CardVideos from '../CardVideos'
import './TipoCategoria.css'

const TipoCategoria = ({ titulo, corDecoracao, videos, onDelete }) => {
  return (
      <div className='categoria' style={{ borderColor: corDecoracao }}>
          <h2 className='titulo' style={{ color: corDecoracao }}>{titulo}</h2>
          <div className='videos'>
              {videos.map((video, index) => (
                  <CardVideos
                      key={index}
                      videoUrl={`https://www.youtube.com/embed/${new URL(video.video).searchParams.get("v")}`}
                      titulo={video.titulo}
                      corDecoracao={corDecoracao}
                      onDelete={() => onDelete(video)}
                      onEdit={() => console.log('Editar vídeo', video.titulo)}
                  />
              ))}
          </div>
      </div>
  );
};

export default TipoCategoria;



