import Link from 'next/link';
import styled from 'styled-components';

const NavWrap = styled.nav`
  background-color: var(--yellow);
  color: white;
  padding: 10px;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);

  a {
    color: var(--black);
    text-decoration: none;
    padding: 50px;
    font-size: 2rem;
  }

  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default function Nav() {
  return (
    <NavWrap>
      <Link href={'/'}>Home</Link>
      <Link href={'/assets'}>Assets</Link>
      <Link href={'/pokemon'}>Pokemon</Link>
      <Link href={'/spotify'}>Spotify</Link>
    </NavWrap>
  );
}
