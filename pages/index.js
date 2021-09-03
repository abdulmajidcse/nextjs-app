import Head from 'next/head'
import { Alert } from 'react-bootstrap'

export default function Home() {

  return (
    <>
      <Head>
        <title>Home - {process.env.APP_NAME}</title>
        <meta name="description" content="A NextJS App for practise purpose" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Alert variant="success">
          Welcome to {process.env.APP_NAME}!
        </Alert>
      </div>
    </>
  )
}
