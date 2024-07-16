import React from 'react';
import FormularioNovoVideo from '../../FormNovoVideo';
import Footer from '../../Footer';


const NovoVideo = ({ tecnologias, aoVideoCadastrado }) => {
  return (
    <div>
      <h1>Novo Video</h1>
      <FormularioNovoVideo tecnologias={tecnologias} aoVideoCadastrado={aoVideoCadastrado} />
      <Footer/>
    </div>
  );
};

export default NovoVideo;