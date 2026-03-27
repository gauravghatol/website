import React from 'react';
import PageHeader from './PageHeader';
import { motion } from 'framer-motion';

const GenericPage = ({
  title,
  children,
  backgroundImage,
  sidebar,
  variant = 'default',
  showInnerTitle = true,
  contentClassName,
}) => {
  const isAboutVariant = variant === 'about';

  return (
    <>
      <PageHeader title={title} path={title} backgroundImage={backgroundImage} />
      <div
        className={`mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6 ${isAboutVariant ? 'py-8 sm:py-10 lg:py-12' : 'py-8 sm:py-10 lg:py-12'}`}
      >
        <div className={sidebar ? 'flex flex-col gap-6 xl:flex-row xl:gap-8' : ''}>
          {sidebar && (
            <aside className="w-full flex-shrink-0 xl:w-[18rem]">
              {sidebar}
            </aside>
          )}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className={`min-w-0 flex-1 min-h-[20rem] ${
               isAboutVariant
                 ? 'rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 shadow-[0_10px_28px_rgba(15,23,42,0.08)]'
                 : 'rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-6 lg:p-8'
             }`}
          >
              {showInnerTitle && (
                <h2
                  className={
                    isAboutVariant
                      ? 'mb-6 border-b border-slate-200 pb-3 text-[clamp(1.25rem,2.8vw,1.9rem)] font-semibold text-slate-900 sm:mb-8'
                      : 'mb-5 inline-block border-b-2 border-ssgmce-orange pb-2 text-[clamp(1.2rem,2.6vw,1.7rem)] font-bold text-ssgmce-blue sm:mb-6'
                  }
                >
                    {title}
                </h2>
              )}
              <div
                className={
                  contentClassName ||
                  (isAboutVariant
                    ? 'max-w-none text-slate-700'
                    : 'prose max-w-none text-gray-700')
                }
              >
                  {children}
              </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default GenericPage;
