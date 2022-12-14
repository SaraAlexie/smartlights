//import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom'
import ControlPanel from './views/ControlPanel';
import Room from './views/Room';
import Layout from './components/Layout';
import LightProvider from './contexts/LightContext';
import CurrentProvider from './contexts/CurrentContext';

function App() {
  return (
    <CurrentProvider>
    <LightProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<ControlPanel />} />
          <Route path="/room/:groupId" element={<Room />} />
        </Route>
      </Routes>
    </LightProvider>
    </CurrentProvider>
  );
}

export default App;