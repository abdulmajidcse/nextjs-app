import { useEffect, useState } from "react"
import Meta from "../../components/Meta"
import Loading from '../../components/Loading'

export default function Todos() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <Meta title="Todo List" />
            <Loading show={loading} />
            <div className="container my-2">
                Todo List
            </div>
        </>
    )
}