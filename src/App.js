/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import { ReactComponent as LogoIcon } from './images/bg.svg';
import { ReactComponent as BrandIcon } from './images/brand.svg';

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
  position: relative;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  width: 1903.2px;
  height: 970px;
  box-sizing: border-box;
  object-fit: cover;
  display: block;
  margin: auto;
  -webkit-transform: translateX(-15%);
  transform: translateX(-15%);
`;
const pageTitle = css`
  position: absolute;
  width: -100%;
  align-items: center;
`;

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
            <div></div>
          </nav>
        </section>
      </div>
    </body>
  );
}

export default App;
