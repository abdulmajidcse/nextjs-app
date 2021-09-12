import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Footer() {
    const theme = useSelector((state) => state.theme.value);

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
