const Navigation = ({navs}) => {
    return (
        <ul className="nav flex-column">
            {navs.map((nav, k) => (
                <li key={k}>
                    <a href={nav.link}>
                        <p className="text-light">{nav.label}</p>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Navigation;