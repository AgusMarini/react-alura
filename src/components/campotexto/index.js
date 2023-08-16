import "./campoTexto.css"
const CampoTexto = (props) => {
    console.log("Datos: ", props.titulo);
    const placeHolderModificado = `${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeHolderModificado}/>
       
       
    </div>
}
export default CampoTexto