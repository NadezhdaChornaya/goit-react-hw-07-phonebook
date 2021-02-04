import styled from 'styled-components';

export const PhonebookWrapper = styled.div`
.mainTitle,.title{
text-align: center;
color:#3b2dd6;
text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;
}

.mainTitle{
    margin-bottom:20px;  
    font-size: 40px;
}
.title{
    margin-bottom:10px;
    font-size: 30px;   
}

.titleSlide-appear{
    transform: translateY(-100%);
}
.titleSlide-appear-active{
    transform: translateY(0);
    transition:transform 500ms linear;
}

.filterSlide-enter{
transform: scale(0);
    
}
.filterSlide-enter-active{
   transform: scale(1);
  transition: transform 500ms ease-in-out;
}
.filterSlide-exit{
    transform: scale(1);
}
.filterSlide-exit-active{
    transform: scale(0);
  transition: transform 500ms ease-in-out;
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