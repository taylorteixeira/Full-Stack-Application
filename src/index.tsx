// npm i react react-dom
// npm i  webpack webpack-cli
// npm i ts-loader

import { createRoot } from 'react-dom/client' 

const App = () => {
  return <div>Hello React</div>
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);