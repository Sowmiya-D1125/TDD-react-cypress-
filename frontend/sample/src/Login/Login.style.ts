import styled from 'styled-components';
import bgImage from '../assets/bgimage.jpg';


interface erroProps {
    readonly isError: boolean;
  }
  interface buttonProps {
    readonly disabled:boolean;

  }
  
export const LoginWrapper = styled.div`
height: 100vh;
margin: auto;
width: 100%;
display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content:center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image:url(${bgImage})
`;

export const Input = styled.input`
height:40px;
width:280px;
border-radius:3px;
margin:5px;
border: solid 1.5px #b3b3ff;
padding:5px;
// color: #6666ff;
&:hover{
    box-shadow: 0 0 5pt 0.5pt #9999ff;
}
&:focus{
    box-shadow: 0 0 5pt 2pt #d24dff;
    outline-width: 0px;
}
`
export const LoginCard = styled.div`
width:400px;
height:400px;
border: solid 1.5px #cc99ff;
box-shadow: 0 0 5pt 2pt #cc99ff;
display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content:center;
flex-direction:column;
border-radius:5px;
h3{
    color:#cc66ff;
    padding:5px;
}
`
export const LoginBtn = styled.button<buttonProps>`
width:110px;
height:50px;
align-self: center;
margin:10px;
border-radius:5px;
background-color:#f7e6ff;
cursor:${(props)=>(props.disabled?"auto":"pointer")} ;
border: 1px solid #df80ff;
&:hover{
    box-shadow: ${(props)=>(props.disabled?"none":"0 0 5pt 2pt #d580ff")} ;
}
&:focus{
    box-shadow: 0 0 5pt 2pt #d580ff;
    outline-width: 0px;
}
`

export const ErrorText = styled.span<erroProps>`
color:red;
display:${(props) => (props.isError?"block":"none")};
font-size:14px;
padding:10px

`