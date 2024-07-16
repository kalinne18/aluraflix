import './EditarVideo.css'

const EditarVideo = ({ label, placeholder, defaultValue, isTextarea, aoAlterado }) => {
    const placeholderModificado = `${placeholder}...`;

    const handleChange = (evento) => {
        aoAlterado(evento.target.value);
    };

    return (
        <div className={`campo-texto ${isTextarea ? 'campo-texto--textarea' : ''}`}>
            <label>{label}</label>
            {isTextarea ? (
                <textarea
                    placeholder={placeholderModificado}
                    className="textarea"
                    value={defaultValue}
                    onChange={handleChange}
                />
            ) : (
                <input
                    type="text"
                    placeholder={placeholderModificado}
                    value={defaultValue}
                    onChange={handleChange}
                />
            )}
        </div>
    );
};

export default EditarVideo;