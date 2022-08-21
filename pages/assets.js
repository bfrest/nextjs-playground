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
`;

const AssetInfo = styled.div`
  background: white;
  border: 1px solid #ededed;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  position: relative;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 6%;

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
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    background-color: rgba(0, 0, 0, 0);
    border: 3px solid var(--black);
    font-size: 1.2rem;
    padding: 10px;
    width: 50%;

    :hover {
      cursor: pointer;
      background-color: var(--yellow);
      // 5AB834 possible green color for adding things
    }
  }
`;

const ActionBar = styled.div`
  display: flex;
  border-bottom: 2px solid gray;
  height: 100%;

  img {
    width: 20%;
    height: auto;
    object-fit: cover;

    :hover {
      cursor: pointer;
    }
  }
`;

const InfoPanel = styled.div`
  padding: 10px 5px;
`;

export default function assets({ assetList }) {
  return (
    <AssetStyle>
      {testData.map((asset) => {
        return (
          <AssetInfo key={asset.id}>
            <ActionBar>
              <img src={asset.images[0]} />
              <p>{asset.brand.toLowerCase()}</p>
            </ActionBar>

            <InfoPanel>
              <p>hours: 909</p>
              <p>Next: service: 993hrs</p>
            </InfoPanel>

            <Buttons>
              {/* TODO: make these side by side */}
              <Link href={'/new-service'}>
                {/* TODO: when clicked, open a modal passing the id for the asset */}
                <button>New Service</button>
              </Link>

              <Link href={`/assets/${asset.id}`}>
                <button>info</button>
              </Link>
            </Buttons>
          </AssetInfo>
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
