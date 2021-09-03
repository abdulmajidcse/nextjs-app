import { Container, Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

export default function Header() {
    return (
        <div className="bg-light">
            <Container>
                <Navbar bg="light" expand="lg">
                <Link href="/" title={process.env.APP_NAME}><a className="text-decoration-none"><Navbar.Brand>{process.env.APP_NAME}</Navbar.Brand></a></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link href="/"><a className="nav-link">Home</a></Link>
                            <Link href="/todos"><a className="nav-link">Todo List</a></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
}