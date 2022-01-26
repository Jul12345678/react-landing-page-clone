/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import { ReactComponent as LogoIcon } from './images/bg.svg';
import { ReactComponent as BrandIcon } from './images/brand.svg';
import { ReactComponent as ProofPass } from './images/proof-pass.svg';

const buttonStyle = css`
  position: absolute;
  letter-spacing: 0.05em;
  line-height: 1;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-family: Poppins, sans-serif;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 9999px;
  gap: 0.75rem;
  align-items: center;
  display: flex;
  text-decoration: inherit;
  box-sizing: border-box;
  border: 0 solid;
  cursor: pointer;
  font-weight: 300;
  --tw-text-opacity: 1;
  color: rgb(255 255 255);
  top: 0;
  right: 0;
  border-radius: 2500px;
  background-color: blue;
  margin-top: 25px;
  margin-right: 20px;
`;
const backgroundPic = css`
  z-index: -1;
  fill: currentColor;
  position: absolute;
  width: 2149.9px;
  height: 3000px;
  -webkit-transform: translateX(-15%);
  transform: translateX(-11.5%);
  padding-top: -8200px;
`;
const pageTitle = css`
  position: absolute;
  width: -90%;
  margin-top: 240px;
  margin-left: 745px;
`;
const text1 = css`
  color: white;
  box-sizing: border-box;
  border: 0 solid;
  margin: auto;
  text-align: center;
  padding-top: 460px;
  padding-left: 35px;
  font-family: Inter, sans-serif;
  line-height: 0.875;
  font-weight: 200;
  font-size: 1.2rem;
`;

const proofCard = css`
  margin-top: 290px;
  transform: rotate(-18deg);
  margin-left: 450px;
`;
const text2 = css``;

function App() {
  return (
    <body>
      <div>
        <div>
          <BrandIcon css={pageTitle} />
        </div>
        <section>
          <nav>
            <div css={buttonStyle}>
              <a>Member Access</a>
            </div>
            <div>
              <LogoIcon css={backgroundPic} />
            </div>
            <div css={text1}>
              <p>A private members only collective of</p>
              <p>1,000 dedicated NFT collectors and artists.</p>
            </div>
            <div>
              <ProofPass css={proofCard} />
            </div>
            <div css={text2}>
              <h1>Proof Collective NFT</h1>
            </div>
          </nav>
        </section>
      </div>
    </body>
  );
}

export default App;
