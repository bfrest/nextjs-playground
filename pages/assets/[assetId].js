import React from 'react';
import testData from '../../testData';

export default function Asset({ asset }) {
  return (
    <div>
      <img src={asset.images[0]} />
      <p>Category: {asset.category}</p>
      <p>Device Name: {asset.title}</p>
      <p>Manufactorer: {asset.brand}</p>
      <p>{asset.description}</p>
    </div>
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
