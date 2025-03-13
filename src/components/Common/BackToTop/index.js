import React from 'react'
import { ArrowUpwardRounded } from '@mui/icons-material';
import "./style.css";

function BackToTop() {

  let mybutton = document.getElementById('myBtn');
  //when user scroll down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
      mybutton.style.display = "flex";
    }else{
      mybutton.style.display = "none";
    }
  }
  //when user click on the button , scroll to the top of the document
  function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop =0;
  }

  return (
    <div className='back-top-top-btn' id='myBtn' onClick={()=>topFunction()}>
      <ArrowUpwardRounded style={{color:"var(--blue)"}} />
    </div>
  )
}

export default BackToTop
