import styled from 'styled-components';
import testData from '../testData';

const AssetStyle = styled.div`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  justify-items: center;

  div {
    background: white;
    border: 1px solid #ededed;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    position: relative;
    display: flex;
    flex-direction: column;
    width: 450px;
    margin: 30px 0;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    p {
      line-height: 2;
      font-weight: 300;
      flex-grow: 1;
      padding: 0 3rem;
      font-size: 1.5rem;
    }

    img {
      height: 300px;
      width: 100%;
    }
  }

  button {
    background-color: white;
    border: 2px solid black;
    margin: 10px;
    padding: 10px;
  }
`;

export default function assets() {
  return (
    <AssetStyle>
      {testData.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.images[0]} />
            <p>{product.brand.toUpperCase()}</p>
            <button>New Service</button>
            <button>info</button>
          </div>
        );
      })}
    </AssetStyle>
  );
}
