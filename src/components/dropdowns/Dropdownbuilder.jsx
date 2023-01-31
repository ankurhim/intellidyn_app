const Dropdownbuilder = ({props}) => {
    return (
        <div class="dropdown">
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                Dropdown button
            </button>
            <ul className="dropdown-menu">
            {props.map((item, k) => (
                <li key={k}>
                    <a className="dropdown-item" href={item.link}>
                        <p className="text-light">{item.label}</p>
                    </a>
                </li>
            ))}
            </ul>
        </div>
    )
};

export default Dropdownbuilder;