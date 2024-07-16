import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import Menu from './componentes/Menu';
import TipoCategoria from './componentes/TipoCategoria';
import Footer from './componentes/Footer';
import NovoVideo from './componentes/Paginas/NovoVideo';
import Home from './componentes/Paginas/Home';
import FormularioEditarVideo from './componentes/Formulario';

function App() {
  const [tipos, setTipos] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/kalinne18/aluraflix-api/db');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        const data = await response.json();
        setTipos(data.tipos);
        setVideos(data.videos);
      } catch (error) {
        console.error('Erro ao buscar dados da API', error);
      }
    };

    fetchData();
  }, []);

  const deletarVideo = (prop) => {
    setVideos(videos.filter(video => video !== prop));
  };

  const aoNovoVideoAdicionado = (videoNovo) => {
    setVideos([...videos, videoNovo]);
  };

  const aoVideoEditado = (videoEditado) => {
    setVideos(videos.map(video => (video.id === videoEditado.id ? videoEditado : video)));
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/"> <Menu /> </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              {tipos.map(categoria => (
                <TipoCategoria
                  key={categoria.titulo}
                  titulo={categoria.titulo}
                  corDecoracao={categoria.corDecoracao}
                  videos={videos.filter(videoNovo => videoNovo.categoria === categoria.titulo)}
                  onDelete={deletarVideo}
                />
              ))}
              <Footer />
            </>
          } />
          <Route path="/novovideo" element={
            <NovoVideo
              tecnologias={tipos.map(categoria => categoria.titulo)}
              aoVideoCadastrado={aoNovoVideoAdicionado}
            />
          } />
          <Route path="/editarvideo/:id" element={
            <EditarVideoWrapper
              videos={videos}
              aoVideoEditado={aoVideoEditado}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

const EditarVideoWrapper = ({ videos, aoVideoEditado }) => {
  const { id } = useParams();
  const video = videos.find(video => video.id === parseInt(id));
  const navigate = useNavigate();

  const handleSave = (videoEditado) => {
    aoVideoEditado(videoEditado);
    navigate('/');
  };

  return (
    <FormularioEditarVideo
      video={video}
      onSave={handleSave}
      onCancel={() => navigate('/')}
    />
  );
};

export default App;

