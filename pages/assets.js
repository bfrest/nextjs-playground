import styled from 'styled-components';
import testData from '../testData';
import Link from 'next/link';

const AssetStyle = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
  height: 100%;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AssetInfo = styled.div`
  background: white;
  border: 1px solid #ededed;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  display: flex;
  align-items: center;
  width: 70%;

  img {
    width: 20%;
    height: 200px;
    object-fit: cover;

    :hover {
      cursor: pointer;
    }
  }

  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
`;

const Buttons = styled.div`
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: space-between;

  button {
    background-color: rgba(0, 0, 0, 0);
    border: 3px solid var(--black);
    font-size: 1.2rem;
    padding: 10px;

    :hover {
      cursor: pointer;
      background-color: var(--yellow);
      // 5AB834 possible green color for adding things
    }
  }
`;

const GreenText = styled.div`
  color: green;
  padding: 0 15px;
`;

export default function assets({ assetList }) {
  return (
    <AssetStyle>
      {testData.map((asset) => {
        return (
          <Link href={`/assets/${asset.id}`}>
            <AssetInfo key={asset.id}>
              <img src={asset.images[0]} />
              <p>{asset.brand.toLowerCase()}</p>
              <p>Serial: {asset.id}</p>
              <p>hours: 909</p>
              <p>Next service: 993hrs</p>
              <GreenText>Good</GreenText>
            </AssetInfo>
          </Link>
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
