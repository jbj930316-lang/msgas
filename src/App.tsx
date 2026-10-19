/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MetricsSection } from './components/MetricsSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { OverviewSection } from './components/OverviewSection';
import { NewsSection } from './components/NewsSection';
import { QuickLinksSection } from './components/QuickLinksSection';
import { Footer } from './components/Footer';

import { QuoteModal } from './components/modals/QuoteModal';
import { ProductDetailModal } from './components/modals/ProductDetailModal';
import { NewsDetailModal } from './components/modals/NewsDetailModal';
import { LocationsModal } from './components/modals/LocationsModal';
import { MsdsModal } from './components/modals/MsdsModal';
import { SearchModal } from './components/modals/SearchModal';
import { TelemetryModal } from './components/modals/TelemetryModal';
import { CompanyHistoryModal } from './components/modals/CompanyHistoryModal';
import { GlobalPartnersModal } from './components/modals/GlobalPartnersModal';
import { NewsletterModal } from './components/modals/NewsletterModal';
import { PrivacyModal } from './components/modals/PrivacyModal';
import { CareersModal } from './components/modals/CareersModal';

import { GasProduct, Language, NewsItem, NetworkHub } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('KOR');

  // Modals state
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<string | undefined>(undefined);

  const [selectedProduct, setSelectedProduct] = useState<GasProduct | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isMsdsOpen, setIsMsdsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTelemetryOpen, setIsTelemetryOpen] = useState(false);

  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [historyTab, setHistoryTab] = useState<'history' | 'ceo' | 'esg'>('history');

  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);

  const handleOpenQuote = (prefill?: string) => {
    setQuotePrefill(prefill);
    setIsQuoteOpen(true);
  };

  const handleOpenHistoryTab = (tab: 'history' | 'ceo' | 'esg' = 'history') => {
    setHistoryTab(tab);
    setIsHistoryOpen(true);
  };

  const handleScrollToNews = () => {
    const el = document.getElementById('news-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4faff] text-[#0b1e26] selection:bg-[#c9e6ff] selection:text-[#001e2f]">
      {/* 1. Header Navigation */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
        onOpenHistory={() => handleOpenHistoryTab('history')}
        onOpenLocations={() => setIsLocationsOpen(true)}
        onOpenMsds={() => setIsMsdsOpen(true)}
        onOpenTelemetry={() => setIsTelemetryOpen(true)}
      />

      {/* Main Container offset for fixed header */}
      <main className="w-full pt-20 flex-1">
        {/* 2. Hero Section: Cinematic Industrial Energy Vision */}
        <HeroSection
          language={language}
          onOpenQuote={() => handleOpenQuote()}
          onOpenTelemetry={() => setIsTelemetryOpen(true)}
        />

        {/* 3. Nationwide Operational Metrics Dashboard */}
        <MetricsSection
          language={language}
          onOpenLocations={() => setIsLocationsOpen(true)}
          onOpenPartners={() => setIsPartnersOpen(true)}
        />

        {/* 4. Core Gas Products Section (제품소개) */}
        <ProductsSection
          language={language}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onOpenMsds={() => setIsMsdsOpen(true)}
        />

        {/* 5. Specialized Services & Nationwide Logistics (서비스) */}
        <ServicesSection
          language={language}
          onOpenQuote={(service) => handleOpenQuote(service)}
          onOpenTelemetry={() => setIsTelemetryOpen(true)}
        />

        {/* 6. Company Overview & Strategic ESG Leadership */}
        <OverviewSection
          language={language}
          onOpenHistory={() => handleOpenHistoryTab('history')}
          onOpenLocations={() => setIsLocationsOpen(true)}
          onOpenMsds={() => setIsMsdsOpen(true)}
          onOpenEsgModal={() => handleOpenHistoryTab('esg')}
        />

        {/* 7. Latest News & Announcements (공지사항 및 입찰공고) */}
        <NewsSection
          language={language}
          onSelectNews={(n) => setSelectedNews(n)}
          onOpenNewsletter={() => setIsNewsletterOpen(true)}
        />

        {/* 8. Quick Service Access Navigation Grid */}
        <QuickLinksSection
          language={language}
          onOpenHistory={() => handleOpenHistoryTab('ceo')}
          onOpenQuote={() => handleOpenQuote()}
          onScrollToNews={handleScrollToNews}
          onOpenLocations={() => setIsLocationsOpen(true)}
        />
      </main>

      {/* 9. Footer */}
      <Footer
        language={language}
        onOpenLocations={() => setIsLocationsOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
        onOpenMsds={() => setIsMsdsOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenCareers={() => setIsCareersOpen(true)}
      />

      {/* 10. Modals & Dialogs */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        language={language}
        initialServiceOrProduct={quotePrefill}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        language={language}
        onOpenQuote={(name) => handleOpenQuote(name)}
        onOpenMsds={() => setIsMsdsOpen(true)}
      />

      <NewsDetailModal
        news={selectedNews}
        onClose={() => setSelectedNews(null)}
        language={language}
      />

      <LocationsModal
        isOpen={isLocationsOpen}
        onClose={() => setIsLocationsOpen(false)}
        language={language}
      />

      <MsdsModal
        isOpen={isMsdsOpen}
        onClose={() => setIsMsdsOpen(false)}
        language={language}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        language={language}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSelectNews={(n) => setSelectedNews(n)}
        onSelectHub={(h: NetworkHub) => {
          setIsLocationsOpen(true);
        }}
      />

      <TelemetryModal
        isOpen={isTelemetryOpen}
        onClose={() => setIsTelemetryOpen(false)}
        language={language}
      />

      <CompanyHistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        language={language}
        initialTab={historyTab}
      />

      <GlobalPartnersModal
        isOpen={isPartnersOpen}
        onClose={() => setIsPartnersOpen(false)}
        language={language}
      />

      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
        language={language}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        language={language}
      />

      <CareersModal
        isOpen={isCareersOpen}
        onClose={() => setIsCareersOpen(false)}
        language={language}
      />
    </div>
  );
}
