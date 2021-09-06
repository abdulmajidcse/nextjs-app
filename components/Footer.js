import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { ThemeContext } from '../contexts/themeContext';

export default function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`p-3 ${theme === 'light' ? 'bg-light' : 'bg-dark'}`}>
            <Container>
                <div className={`text-center ${theme === 'light' ? 'text-dark' : 'text-light'}`}>
                    <p>
                        2021 &copy; Developed By{' '}
                        <a href="https://facebook.com/abdulmajidcse">Abdul Majid</a>
                    </p>
                </div>
            </Container>
        </div>
    );
}
