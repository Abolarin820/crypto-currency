import { Link } from "react-router-dom";
import Button from "../Button";
import AnchorTemporaryDrawer from "./drawer";
import "./style.css";

function Header() {
  return (
    <div className='navbar'>
      <h1 className="logo">
        CryptoTracker<span className={{color:"var(--blue)"}}>.</span>
      </h1>
      <div className='links'>
        <Link to="/" ><p className='link'>Home</p></Link>
        <Link to="/compare" ><p className='link'>Compare</p></Link>
        <Link to="/watchlist" ><p className='link'>Watchlist</p></Link>
        <Link to='/dashboard'>
          <Button text="dashboard" onclick={()=> console.log('button clicked')} outlined={false}/>
        </Link>
      </div>
      <div className="mobile-drawer">
        <AnchorTemporaryDrawer /> 
      </div>
    </div>
  )
}

export default Header
