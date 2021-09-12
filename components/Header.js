/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

export default function Header() {
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();

    return (
        <div className={theme === 'light' ? 'bg-light' : 'bg-dark'}>
            <Container>
                <Navbar expand="lg">
                    <Link href="/" title={process.env.APP_NAME}>
                        <a className="text-decoration-none">
                            <Navbar.Brand
                                className={theme === 'light' ? 'text-dark' : 'text-light'}
                            >
                                {process.env.APP_NAME}
                            </Navbar.Brand>
                        </a>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link href="/">
                                <a
                                    className={`nav-link ${
                                        theme === 'light' ? 'text-dark' : 'text-light'
                                    }`}
                                >
                                    Home
                                </a>
                            </Link>
                            <Link href="/todos">
                                <a
                                    className={`nav-link ${
                                        theme === 'light' ? 'text-dark' : 'text-light'
                                    }`}
                                >
                                    Todo List
                                </a>
                            </Link>
                            <span
                                style={{ cursor: 'pointer' }}
                                className={`nav-link ${
                                    theme === 'light' ? 'text-dark' : 'text-light'
                                }`}
                                onClick={() => dispatch(toggleTheme())}
                            >
                                {theme === 'light' ? (
                                    <i className="bi bi-moon-fill" />
                                ) : (
                                    <i className="bi bi-moon" />
                                )}
                            </span>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
}
