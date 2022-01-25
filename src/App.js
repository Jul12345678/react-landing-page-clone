/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';

const bodyColor = css`
  // margin: auto 0px;
  // width: auto;
  height: 100vh;
  background-color: black;
`;

const navigationStyle = css`
  position: absolute;
  top: 35px;
  right: 45px;
  background-color: blue;
  text-transform: uppercase;
  // border: none;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  padding: 10px 20px;
  text-align: center;
  // te/xt-decoration: none;
  color: rgb(165 180 252 / var(--tw-text-opacity));

  margin: 4px 2px;
  cursor: pointer;
  border-radius: 24px;
  color: white;
  font-size: 0.875rem;
`;

const titleStyle1 = css`
  position: relative;
  top: 50px;
  text-align: center;
  font-family: serif;
  font-size: 120px;
  text-transform: uppercase;
  background: linear-gradient(to right, #f2cfd0, #ebb4fd, #456aff);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;
const titleStyle2 = css`
  position: relative;
  top: -95px;
  text-align: center;
  font-family: helvetica;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 40px;
  padding-left: 29px;
  background: linear-gradient(to right, #facde8, #e6b8ff, #9ca9ff);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

const text1 = css`
  text-align: center;
  padding-left: 0px;
  padding-top: -200px;
  line-height: 1rem;
  font-size: 20px;
  color: white;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: Inter, sans-serif;
`;

function App() {
  return (
    <body css={bodyColor}>
      <div>
        <section>
          <nav css={navigationStyle}>
            <a>Member Access</a>
          </nav>
          <nav css={titleStyle1}>
            <h1>Proof</h1>
          </nav>
          <nav css={titleStyle2}>
            <h2>Collective</h2>
          </nav>
          <div css={text1}>
            <p>
              A private members only collective of{' '}
              <p>1,000 dedicated NFT collectors and artists.</p>
            </p>
          </div>
        </section>
      </div>
    </body>
  );
}

export default App;
