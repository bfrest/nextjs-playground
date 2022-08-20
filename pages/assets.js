import styled from 'styled-components';
import testData from '../testData';
import Link from 'next/link';

const AssetStyle = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
      :hover {
        cursor: pointer;
      }
    }
  }

  button {
    background-color: white;
    border: 3px solid var(--black);
    font-size: 1.2rem;
    margin: 10px;
    padding: 10px;
    :hover {
      cursor: pointer;
      background-color: var(--yellow);
      // 5AB834 possible green color for adding things
    }
  }
`;

export default function assets({ assetList }) {
  return (
    <AssetStyle>
      {testData.map((asset) => {
        return (
          <div key={asset.id}>
            <img src={asset.images[0]} />
            <p>{asset.brand.toLowerCase()}</p>

            <Link href={'/new-service'}>
              <button>New Service</button>
            </Link>

            <Link href={`/assets/${asset.id}`}>
              <button>info</button>
            </Link>
          </div>
        );
      })}
    </AssetStyle>
  );
}

export function getStaticProps() {
  const assetList = testData;

  // Allows the data from request to be available in props
  return {
    props: {
      assetList,
    },
  };
}
