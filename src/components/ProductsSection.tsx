import React, { useState } from 'react';
import { GAS_PRODUCTS } from '../data/mockData';
import { GasProduct, Language } from '../types';

interface ProductsSectionProps {
  language: Language;
  onSelectProduct: (product: GasProduct) => void;
  onOpenMsds: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  language,
  onSelectProduct,
  onOpenMsds,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: '전체 품목', labelEng: 'All Products' },
    { key: 'industrial', label: '산업용 가스', labelEng: 'Industrial Gas' },
    { key: 'fuel', label: '연료용 가스', labelEng: 'Fuel Gas' },
    { key: 'specialty', label: '특수 가스', labelEng: 'Specialty Gas' },
    { key: 'medical', label: '의료용 가스', labelEng: 'Medical Gas' },
    { key: 'standard', label: '표준 가스', labelEng: 'Standard Gas' },
    { key: 'equipment', label: '공급 설비 & 장비', labelEng: 'Equipment' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? GAS_PRODUCTS
      : GAS_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="w-full bg-[#f4faff] py-20 lg:py-24" id="products-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header with Tabs Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00639a]"></span>
              <span className="text-[12px] font-bold text-[#00639a] uppercase tracking-wider">
                {language === 'KOR' ? '제품소개 · Gas Portfolio' : 'Product Lineup · Gas Portfolio'}
              </span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] text-[#00334d] font-bold tracking-tight">
              {language === 'KOR'
                ? '다양한 산업분야를 아우르는 고부가가치형 가스산업'
                : 'High-Value Gas Solutions Powering Diverse Industrial Sectors'}
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#41484e] mt-3 leading-relaxed">
              {language === 'KOR'
                ? '철저한 품질 관리와 기술력으로 반도체, 의료, 첨단 제조 등 전 산업군에 최적의 고순도 가스를 신속하고 안전하게 공급합니다.'
                : 'With stringent quality control and verified technology, we rapidly and reliably supply ultra-high-purity gases tailored to semiconductors, healthcare, and advanced manufacturing.'}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenMsds}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#00334d] text-[13px] font-bold shadow-sm hover:shadow-md hover:bg-[#e7f6ff] transition-all border border-[#004b6e]/15 cursor-pointer"
            >
              <span>{language === 'KOR' ? '스펙시트 종합 열람' : 'View All Data Sheets'}</span>
              <span className="material-symbols-outlined text-[16px]">download</span>
            </button>
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-[#00334d] text-white shadow-sm'
                  : 'bg-white text-[#41484e] hover:bg-[#def1fc] hover:text-[#00334d] border border-[#004b6e]/10'
              }`}
            >
              {language === 'KOR' ? cat.label : cat.labelEng}
            </button>
          ))}
        </div>

        {/* 6-Product Modular Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="rounded-2xl bg-white p-7 shadow-sm flex flex-col justify-between group hover:shadow-lg hover:-translate-y-1 transition-all border border-[#004b6e]/8 cursor-pointer"
            >
              <div>
                {/* Product Image Frame */}
                <div className="w-full h-44 rounded-xl overflow-hidden mb-6 relative bg-[#00334d]/5">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${product.imageUrl}')` }}
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#00334d]/85 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide border border-white/10">
                    {language === 'KOR' ? product.badge : product.badgeEng}
                  </span>
                </div>

                {/* Name & English tag */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[22px] font-bold text-[#00334d]">
                    {language === 'KOR' ? product.name : product.nameEng}
                  </span>
                  <span className="text-[12px] font-bold text-[#00639a] uppercase tracking-wider">
                    {product.nameEng}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[14px] text-[#41484e] mb-4 leading-relaxed line-clamp-3">
                  {language === 'KOR' ? product.description : product.descriptionEng}
                </p>

                {/* Gas chips preview */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.gases.slice(0, 3).map((gas, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#f4faff] text-[#004b6e] border border-[#004b6e]/10"
                    >
                      {gas}
                    </span>
                  ))}
                  {product.gases.length > 3 && (
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#f4faff] text-[#71787f]">
                      +{product.gases.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer with Supply Form */}
              <div className="pt-4 border-t border-[#004b6e]/8 flex items-center justify-between">
                <span className="text-[12px] text-[#41484e] font-medium truncate max-w-[210px]">
                  {language === 'KOR' ? product.supplyForm : product.supplyFormEng}
                </span>
                <span className="w-8 h-8 rounded-full bg-[#e7f6ff] flex items-center justify-center text-[#00334d] group-hover:bg-[#00334d] group-hover:text-white transition-colors shrink-0">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
