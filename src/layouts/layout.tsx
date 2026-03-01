import { Container } from '@/components/container/container';
import { Link, Outlet } from 'react-router';
import './layout.css';

export function Layout() {
  return (
    <div className='layout'>
      <header className='header'>
        <Container>
          <Link to={'/'} className='logo'>
            Quiz Editor
          </Link>
        </Container>
      </header>

      <main className='main'>
        <Container>
          <Outlet />
        </Container>
      </main>

      <footer className='footer'>
        <Container>
          <p className='copyright'>
            &copy; {new Date().getFullYear()} Quiz Editor. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
}
