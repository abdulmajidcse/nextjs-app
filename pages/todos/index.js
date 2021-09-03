import { useEffect, useState } from "react"
import Meta from "../../components/Meta"
import Loading from '../../components/Loading'
import { Card, Table } from "react-bootstrap"
import Link from 'next/link'

export default function Todos() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <Meta title="Todo List" />
            <Loading show={loading} />
            <div className="container my-3">
                <Card>
                    <Card.Header>
                        <span className="h4 me-4">Todo List</span>
                        <Link href="/todos"><a className="btn btn-sm btn-primary">Add New</a></Link>
                    </Card.Header>

                    <Card.Body>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Title</th>
                                    <th>Note</th>
                                    <th>Comment</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Note Title</td>
                                    <td>Note Details</td>
                                    <td>Comments...</td>
                                    <td>
                                        <Link href="/todos"><a className="btn btn-sm btn-primary me-1">Edit</a></Link>
                                        <Link href="/todos"><a className="btn btn-sm btn-danger">Delete</a></Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>   
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}