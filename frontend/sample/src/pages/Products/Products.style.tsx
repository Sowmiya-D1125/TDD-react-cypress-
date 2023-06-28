import styled from 'styled-components';


interface erroProps {
    readonly isError: boolean;
  }
  interface buttonProps {
    readonly disabled:boolean;

  }
  
export const ProductWrapper = styled.div`
height: 100vh;
margin: auto;
width: 100%;
`;

export const ListWrapper = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
align-content: center;
justify-content:center;
`
export const Card = styled.div`
margin:10px;
display:flex;
flex-direction:column;
border-radius:5px;
height:250px;
width:230px;
&:hover{
box-shadow: 0 0 5pt 2pt grey;

}
`
export const Image = styled.img`
width: 200px;
top:0px;
  height: 200px;
  object-fit: scale-down;
  align-self:center;
`
