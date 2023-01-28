import "./style.css";

const Navigation = ({navs}) => {
    return (
        <div className="sidenav">
            {navs.map((nav, k) => (
                <a href={nav.link} key={k}>{nav.label}</a>
            ))}
        </div>
    )
}

export default Navigation;