import testData from '../../testData';
import styled from 'styled-components';

const ItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 100%;
  padding: 2rem 1rem;

  img {
    width: 40%;
  }
`;

export default function Asset({ asset }) {
  return (
    <ItemStyles>
      <img src={asset.thumbnail} />
      <p>Serial: {asset.id}</p>
      <p>Category: {asset.category}</p>
      <p>Device Name: {asset.title}</p>
      <p>Manufactorer: {asset.brand}</p>
      <p>{asset.description}</p>
      <p>{asset.rating}/10</p>
      <p>{asset.category}</p>
      <p>{asset.discountPercentage}%</p>
    </ItemStyles>
  );
}

export function getStaticProps({ params }) {
  // cause arrays
  const assetId = params.assetId - 1;
  const results = testData[assetId];

  return {
    props: {
      asset: results,
    },
  };
}

export function getStaticPaths() {
  let allAssets = testData;

  return {
    // loops over each result to get create a path for each asset
    paths: allAssets.map((asset) => {
      const assetId = `${asset.id}`;
      return {
        // This is the parameter for the url you use in static props
        params: {
          // so nextjs knows all routes ahead of time
          assetId: assetId,
        },
      };
    }),
    fallback: false,
  };
}
