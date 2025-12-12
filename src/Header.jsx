import Logo from "./assets/logo_2.png"
import text from "./assets/text_logo.png"
import "./Header.css"

function Header({ setIsLoggedIn }) {

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);    // <-- Update state
    window.location.href = "/"; 
  };

  return (
    <div>
      <div className="header">
        <div className="top">
         <a href="https://journal-suggestion-backend-fastapi.vercel.app/homepage"> <img src={Logo} alt="Logo" /></a>
         <a href="https://journal-suggestion-backend-fastapi.vercel.app/homepage"> <img src={text} alt="Logo" /></a>
          <button id="logbtn" onClick={logout}>Log out</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
