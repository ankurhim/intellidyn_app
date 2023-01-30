import { Routes, Route } from 'react-router-dom';

const Routebuilder = ({routes}) => {
    return (
        <div class="w3-container w3-padding-large" style={{marginBottom:"32px"}}>
            <Routes>
                {routes.map((route, k) => (
                <Route path={route.link} key={k} element={route.element} />
            ))}
            </Routes>
        </div>
    )
}

export default Routebuilder;