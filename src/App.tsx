import { AppFrame } from '@cogisphere/cogi-uikit';
import { Header, Footer } from './App/index';

function App() {

  const top = (<Header />);
  const bottom= (<Footer />);

  return (
    <AppFrame top={top} bottom={bottom}>
        <div>"Content"</div>
    </AppFrame>
  );
}

export default App;
