import './style.css';

function Button({text, onclick, outlined}) {
  return (
    <button className={outlined ? 'outlined-btn' : 'btn'} onClick={()=> onclick()}>{text}</button>
  )
}

export default Button
