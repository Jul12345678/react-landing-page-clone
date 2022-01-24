/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';

const testStyle = css`
  background-color: red;
`;

function App() {
  return <div css={testStyle}>Hi!</div>;
}

export default App;
