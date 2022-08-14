import Link from 'next/link';
import styled from 'styled-components';

const NavStyles = styled.nav`
  border: 2px solid black;
  background-color: lightcyan;
  padding: 10px;
  a {
    color: black;
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
    <NavStyles>
      <Link href={'/'}>Home</Link>
      <Link href={'/pokemon'}>Pokemon</Link>
      <Link href={'/spotify'}>Spotify</Link>
    </NavStyles>
  );
}
