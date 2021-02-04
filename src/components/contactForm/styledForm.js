import styled from "styled-components";

export const FormWrapper = styled.form`
margin-bottom: 20px;
.label{
    font-size: 20px;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;
}
.input{
    margin: 5px 0 20px 0;
    padding: 5px 10px;
  
    width: 100%;
    
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #afaeb0;
     &:hover {
   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}
}
.buttonWrapper{
   display:flex;
   justify-content:flex-end;
}
.button{
    	
   width: 25%;
   padding: 5px 10px; 
   font-size: 20px;
   border-radius: 5px;
   border-color: #eeedfa;
   text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;
   background-color:#eeedfa;
   cursor: pointer;
   
   &:hover {
       background-color:#3CB371;
       box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}
}
.alertSlide-enter{
transform: translateX(200%);
}
.alertSlide-enter-active{
    transform: translateX(0);
	transition: all 250ms linear;
}
.alertSlide-exit{
    transform: translateX(0);
}
.alertSlide-active{
    transform: translateX(200%);
	transition: all 250ms linear;
}

`