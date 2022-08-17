import styled from 'styled-components';
import testData from '../testData';

const AssetStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    color: white;
    background-color: #040404;
    max-width: 30%;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;

    img {
      height: 300px;
      width: 100%;
    }
  }
`;

export default function assets() {
  return (
    <AssetStyle>
      {testData.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.images[0]} />
            <p>{product.brand}</p>
          </div>
        );
      })}
    </AssetStyle>
  );
}
