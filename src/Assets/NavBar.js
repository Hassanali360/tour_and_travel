import React,{useState} from "react";
import WebLogo from './Icons/icon.png'
import IconOpen from './Icons/chevron.svg'
import IconClose from './Icons/close.svg'
import { Link
} from "react-router-dom";

export default function NavBar() {
  const [toggle,settoggle] = useState(true);
 const handleonclick=()=>{
  settoggle(!toggle);
  }
  return (
    <div className="NavBar--top--container">
      <div className="NaveBar--cont1">
        <img className="Web--logo" src={WebLogo} alt="website logo" />
          <img className="chevron--icon"onClick={handleonclick} src={!toggle ? IconOpen: IconClose} alt="The chevron Icon" />
      </div>
      <div className="NaveBar--cont2">
        {toggle && (
          <nav className="NavBar">
            <ul className="Links">
            <li className="All--links"><Link to="/">HOME</Link></li>
            <li className="All--links"><Link to="/">ABOUT US</Link></li>
            <li className="All--links"><Link to="/">PACKAGES</Link></li>
            <li className="All--links"><Link to="/">BLOG</Link></li>
            <li className="All--links"><Link to="/contact">CONTACT US</Link></li>
            <li className="All--links"><Link to="/">LOGIN</Link></li>
            </ul>
            </nav>
          )}
      </div>
    </div>
  );
}
