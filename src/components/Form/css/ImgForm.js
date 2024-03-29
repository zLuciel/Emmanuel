import styled from "styled-components";

export const ImgContainer = styled.div`
position: relative;
justify-self: end;
align-self: center;
width:623px;
height:399px;
//**Responsive  */
@media screen and (max-width: 1293px){
    justify-self: center;
    width: 100%;
    height: auto;

}
::before{
 position: absolute;
 content: "";
 top: 50%;
 left: 50%;
 transform: translate(-50%,-50%);
 border: 3px solid white;
 height: 110%;
 width: 60%;
}
.absolRedes{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,200%);
}
`