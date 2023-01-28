import { Routes, Route } from 'react-router-dom';

const Routebuilder = ({routes}) => {
    return (
        <div className="route">
            <Routes>
                {routes.map((route, k) => (
                <Route path={route.link} key={k} element={route.element} />
            ))}
            </Routes>
        </div>
    )
}

export default Routebuilder;