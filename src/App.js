import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UseCasesPage from './pages/UseCasesPage';
import UseCaseDetailPage from './pages/UseCaseDetailPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import ShopPage from './pages/ShopPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

// Reset scroll position on every navigation (SPA routers don't do this).
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/use-cases/:id" element={<UseCaseDetailPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        
        <Route path="/privacy" element={<LegalPage kind="privacy" />} />
        <Route path="/terms" element={<LegalPage kind="terms" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

// Place back in when inuse after howItWorksPage
/**
 * <Route path="/pricing" element={<PricingPage />} />
        <Route path="/shop" element={<ShopPage />} />
 */
