import { useEffect } from "react";
import { fetchList, ENDPOINTS } from "./services/tmdb";
export default function App() {
    useEffect(() => {
        fetchList(ENDPOINTS.trending).then(console.log);
    }, []);
    return <h1>Netflix Clone</h1>;
}