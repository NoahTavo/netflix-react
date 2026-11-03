import { Route, Routes } from "react-router-dom";
import NetflixApp from "./components/NetflixApp";
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<NetflixApp />} />
        </Routes>
    );
}