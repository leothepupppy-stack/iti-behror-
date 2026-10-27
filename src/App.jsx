import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext.jsx';
import Layout from './components/Layout.jsx';
import LanguageGate from './components/LanguageGate.jsx';

// Each page is its own JavaScript chunk, downloaded only when first visited.
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Trades = lazy(() => import('./pages/Trades.jsx'));
const Notices = lazy(() => import('./pages/Notices.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  const { lang } = useLanguage();

  return (
    <>
      {/* Until a language is chosen, the website itself is NOT rendered at all,
          so nothing of the homepage is visible or readable behind the welcome screen. */}
      {lang !== null ? (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="trades" element={<Trades />} />
            <Route path="notices" element={<Notices />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      ) : null}

      <LanguageGate />
    </>
  );
}
