import { AppFrame } from '@cogisphere/cogi-uikit';
import { HashRouter } from 'react-router-dom';
import { Header, Footer, Content } from './App/index';

function App() {

  const top = (<Header />);
  const bottom = (<Footer />);

  return (
    <HashRouter>
      <AppFrame top={top} bottom={bottom}>
        <Content />
      </AppFrame>
    </HashRouter>
  );
};

export default App;
