import { useEffect, useState } from "react"
import Meta from "../../components/Meta"
import Loading from '../../components/Loading'
import { Card, Table } from "react-bootstrap"
import Link from 'next/link'

export default function Todos({ data }) {
    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        if (data.data) {
            setTodos(data.data)
        } else {
            console.log(data.errors)
        }
        setLoading(false);
    }, [])

    return (
        <>
            <Meta title="Todo List" />
            <Loading show={loading} />
            <div className="container my-3">
                <Card>
                    <Card.Header>
                        <span className="h4 me-4">Todo List</span>
                        <Link href="/todos/create"><a className="btn btn-sm btn-primary">Add New</a></Link>
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
                                {todos.map((todo, index) => 
                                    <tr key={todo.id}>
                                        <td>{++index}</td>
                                        <td>{todo.title}</td>
                                        <td>{todo.note}</td>
                                        <td>{todo.comment}</td>
                                        <td>
                                            <Link href="/todos"><a className="btn btn-sm btn-primary me-1">Edit</a></Link>
                                            <Link href="/todos"><a className="btn btn-sm btn-danger">Delete</a></Link>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>   
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}


export async function getServerSideProps() {
    // get todos with js fetch
    const res = await fetch(`${process.env.API_URL}/todos`, {
        method: 'get',
    })

    const data = await res.json()
    
    return {
      props: { data }
    }
  }