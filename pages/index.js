import Meta from '../components/Meta'
import Link from 'next/link'
import { Alert } from 'react-bootstrap'

export default function Home() {

  return (
    <>
      <Meta title="Home" />
      <div className="container my-5">
        <Alert variant="success">
          <Alert.Heading>Welcome to {process.env.APP_NAME}</Alert.Heading>
          <p>
            I'm a Web Expert. I love to learn and share my knowledge about programming. I'm currently working with Laravel and ReactJS. And also learnig NextJs. In this app, I've created a todo list. You can see the todo list to click on bellow.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Link href="/todos"><a className="btn btn-sm btn-outline-success">Todo List</a></Link>
          </div>
        </Alert>
      </div>
    </>
  )
}
