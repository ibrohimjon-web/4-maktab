import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import IntroModal from './IntroModal/IntroModal.jsx';

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

import Home from './pages/Home/Home.jsx';
import Bizhaqimizda from './pages/Bizhaqimizda/Bizhaqimizda.jsx';
import Qonunlar from './pages/Qonunlar/Qonunlar.jsx';
import Forma from './pages/Forma/Forma.jsx';
import Bayramlar from './pages/Bayramlar/Bayramlar.jsx';
import Darslavhalar from './pages/Darslavhalar/Darslavhalar.jsx';
import Tadbirlar from './pages/Tadbirlar/Tadbirlar.jsx';
import Yangiliklar from './pages/Yangiliklar/Yangiliklar.jsx';
import Rahbarlar from './pages/Rahbarlar/Rahbarlar.jsx';
import Manzil from './pages/Manzil/Manzil.jsx';
import Boglanish from './pages/Boglanish/Boglanish.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';


import SingleRahbar from './pages/SingleRahbar/SingleRahbar.jsx';


const App = () => {
  const location = useLocation();

  return (
    <div className="app-wrapper">
      <IntroModal />
      <Navbar />

      <div className="container">
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames="page"
          >
            <Routes location={location}>
              <Route path="/" exact element={<Home />} />
              <Route path="/bizhaqimizda" element={<Bizhaqimizda />} />
              <Route path="/qonunlar" element={<Qonunlar />} />
              <Route path="/forma" element={<Forma />} />
              <Route path="/bayramlar" element={<Bayramlar />} />
              <Route path="/darslavhalar" element={<Darslavhalar />} />
              <Route path="/tedbirlar" element={<Tadbirlar />} />
              <Route path="/yangiliklar" element={<Yangiliklar />} />
              <Route path="/rahbarlar" element={<Rahbarlar />} />
              <Route path="/manzil" element={<Manzil />} />
              <Route path="/boglanish" element={<Boglanish />} />

              <Route path="*" element={<NotFound />} />

              <Route path="/rahbarlar" element={<Rahbarlar />} />
      <Route path="/rahbar/:id" element={<SingleRahbar />} />

            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>

      <Footer />
    </div>
  );
};

export default App;
