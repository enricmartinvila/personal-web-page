import './App.css';
import { I18nProvider } from './Components/i18nContext';
import Calendar from './Pages/Calendari';
import Contacte from './Pages/Contact';
import Header from './Pages/Header';
import { Ideari } from './Pages/Ideari';
import './Pages/MainPage';
import MainPage from './Pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import QuiSom from './Pages/QuiSom';
import Inscripcions from './Pages/Inscripcions';

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden max-w-full w-screen pt-[4.75rem] font-sans bg-gradient-to-br from-[#e6a2ab] to-[#dd853e]">
        <I18nProvider>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/qui-som" element={<QuiSom />} />
            <Route path="/ideari" element={<Ideari />} />
            <Route path="/calendari" element={<Calendar />} />
            <Route path="/inscripcions" element={<Inscripcions />} />
            <Route path="/contacte" element={<Contacte />} />
          </Routes>
        </I18nProvider>
      </div>
    </>
  );
}

export default App;
