/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import React from 'react';
import { ReactComponent as LogoIcon } from './images/bg.svg';
import { ReactComponent as BrandIcon } from './images/brand.svg';
import { ReactComponent as ChatIcon } from './images/chat-icon.svg';
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
  fill: black;
  mix-blend-mode: overlay;
  position: absolute;
  width: 2149.9px;
  height: 2660px;
  -webkit-transform: translateX(-15%);
  transform: translateX(-11.5%);
  padding-top: -200px;
  background-size: cover;
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
  margin-top: 285px;
  transform: rotate(-17deg);
  margin-left: 440px;
`;
const text2 = css`
  color: white;
  display: block;
  text-align: left;
  font-weight: 300;
  padding-left: 950px;
  margin-top: -295px;
  font-size: 32px;
`;
const text3 = css`
  color: #a5b4fc;
  padding-left: 950px;
  margin-top: -25px;
`;
const text4 = css`
  box-sizing: border-box;
  border: 0 solid;
  margin: auto;
  text-align: center;
  margin-top: 235px;
  margin-bottom: -10px;
`;

const text5 = css`
  padding-left: 800px;
  margin-top: 100px;
`;

const text6 = css`
  padding-left: 1000px;
  margin-top: -75px;
`;

const buttonStyle2 = css`
  position: absolute;
  letter-spacing: 0.05em;
  line-height: 1;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-family: Poppins, sans-serif;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 9999px;
  gap: 0.75rem;
  align-items: center;
  display: flex;
  text-decoration: inherit;
  box-sizing: border-box;
  border: 0 solid;
  cursor: pointer;
  font-weight: 300;
  margin-left: 950px;
  border-radius: 2500px;
  background-color: blue;
  margin-top: 20px;
  font: 14px;
  font-family: sans-serif;
  background: linear-gradient(to right, #5777f6, #7f65f6, #a457f7);
`;
const text41 = css`
  color: #a5b4fc;
  margin-top: -12px;
`;

const imgOfSix = css`
  // in App.css
`;
const chatIcon = css`
  position: absolute;
  margin-left: 440px;
  padding-top: 200px;
`;
const endPart1 = css`
  font-family: Poppins, sans-serif;
  color: white;
  font-size: 24px;
  font-weight: 300;
  margin-left: 580px;
  padding-top: 190px;
  width: 100%;
`;
const endPart2 = css`
  color: rgb(165, 180, 252);
  position: absolute;
  margin-left: 580px;
  margin-top: -10px;
`;

const endPart3 = css`
  color: rgb(165, 180, 252);
  position: absolute;
  margin-left: 580px;
`;

const buttonStyle3 = css`
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
  margin-top: 2360px;
  margin-right: 490px;
`;
function App() {
  return (
    <body className="body">
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
            <div css={text3}>
              <p>
                To join, one must hold the PROOF Collective NFT. Membership
                includes
              </p>
              <p>
                access to our private Discord, early access to the PROOF
                podcast, in-
              </p>
              <p>
                person events, and other collaborations created exclusively for
                PROOF
              </p>
              <p>Collective members.</p>
            </div>
            <div css={buttonStyle2}>View on opensea</div>
            <div className="body">
              <div css={text4}>
                <h1 className="CollectiveIntHeader">Collective Intelligence</h1>
                <p css={text41}>
                  Our members were early collectors of some of the most
                  sought-after NFT projects.
                </p>
                <p css={text41}>
                  We believe in group bottoms-up-driven research. A collective
                  working together is
                </p>
                <p css={text41}>stronger than any single member.</p>
              </div>
              <div css={text5}>
                <p className="text511">1,000</p>
                <p className="text51">Membership NFTs</p>
              </div>
              <div css={text6}>
                <p className="text611">223.804</p>
                <p className="text61">Member Owned NFTs</p>
              </div>
              <div className="body" />

              <div css={imgOfSix}>
                <img className="img1" src="/imagespng/logo1.png" alt="Image1" />
                <img className="img2" src="/imagespng/logo2.png" alt="Image2" />
                <img className="img3" src="/imagespng/logo3.png" alt="Image3" />
                <img className="img4" src="/imagespng/logo4.png" alt="Image4" />
                <img className="img5" src="/imagespng/logo5.png" alt="Image5" />
                <img className="img6" src="/imagespng/logo6.png" alt="Image6" />
              </div>
            </div>
            <div>
              <p className="cryptoPunks">306</p>
              <p className="cryptoPunks2">CryptoPunks</p>
              <p className="boredApes">370</p>
              <p className="boredApes2">Bored Apes</p>
              <p className="meebits">766</p>
              <p className="meebits2">Meebits</p>
              <p className="artBlocks">5.188</p>
              <p className="artBlocks2">Art Blocks</p>
              <p className="superRare">590</p>
              <p className="superRare2">SuperRare 1:1 NFTs</p>
              <p className="metaVerse">815</p>
              <p className="metaVerse2">MetaVerse</p>
            </div>
            <div>
              <ChatIcon css={chatIcon} />
            </div>
            <div>
              <p css={endPart1}>Membership Entrance</p>
              <p css={endPart2}>
                Already hold the PROOF Collective NFT? Authenticate your NFT,
                and jump into
              </p>
              <p css={endPart3}>the conversation!</p>
            </div>
            <div css={buttonStyle3}>Member Access</div>
          </nav>
        </section>
      </div>
    </body>
  );
}

export default App;
