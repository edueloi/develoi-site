
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const updateObserver = () => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };

    updateObserver();
    // Re-run observer when content changes
    const timeoutId = setTimeout(updateObserver, 150);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [currentPage]);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'services', 'solutions', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('popstate', handlePopState);
    
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && ['home', 'services', 'solutions', 'about', 'contact'].includes(initialHash)) {
      setCurrentPage(initialHash);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'auto' });
    window.history.pushState(null, '', `#${page}`);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={navigate} />;
      case 'services': return <Services onNavigate={navigate} />;
      case 'solutions': return <Solutions onNavigate={navigate} />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={navigate}>
      {renderPage()}
    </Layout>
  );
};

export default App;
