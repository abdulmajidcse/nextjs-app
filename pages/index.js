import Head from 'next/head'
import { Alert } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - NextJS App</title>
        <meta name="description" content="A NextJS App for practise purpose" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Alert variant="success">
          Welcome to NextJS App!
        </Alert>
      </div>
    </>
  )
}
