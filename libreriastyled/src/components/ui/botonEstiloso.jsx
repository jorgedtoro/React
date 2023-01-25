
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
background-color:indigo;
color:${props => props.colorTexto === 'dark' ? 'black': 'white'};
font-size:1rem;
border:none;
margin:1rem;

${({primary})=>{
    if(primary){
        return css`
            background-color:dodgerblue;
            border:1px solid red;
        `
    }
}}
`


//con children capturo el texto entre las dos etiquetas, en este caso Enviar y Reset de los botones de App.js
const BotonEstiloso = ({children, colorTexto, primary}) => {
    // console.log(children)
    return <StyledButton colorTexto={colorTexto} primary={primary}>{children}</StyledButton>;
}


export default BotonEstiloso;