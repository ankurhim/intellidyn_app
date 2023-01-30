// import "./style.css";

const Navigation = ({navs}) => {
    return (
        <nav className="w3-sidebar w3-bar-block w3-white w3-left w3-collapse w3-animate-left" style={{zIndex:"3", width:"300px"}} id="mySidebar">
            <div class="w3-container">
                <a href="#" onclick={w3_close} className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
                    <i class="fa fa-remove"></i>
                </a>
            </div>
            <div class="w3-bar-block">
                {navs.map((nav, k) => (
                    <span key={k}>
                        <a href={nav.link} className="w3-bar-item w3-button">
                            {nav.label}
                        </a>
                    </span>
                ))}
            </div>
        </nav>
    )
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

export default Navigation;