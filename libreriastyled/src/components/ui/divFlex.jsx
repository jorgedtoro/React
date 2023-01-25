
import styled from "styled-components";

const StyleDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    border:1px solid red;
`

const flexDiv = ({children})=>{
    return <StyleDiv>{children}</StyleDiv>
}

export default flexDiv;