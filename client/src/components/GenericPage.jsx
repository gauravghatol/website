import React from 'react';
import PageHeader from './PageHeader';
import { motion } from 'framer-motion';

const GenericPage = ({ title, children }) => {
  return (
    <>
      <PageHeader title={title} path={title} />
      <div className="container mx-auto px-4 py-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="bg-white rounded-lg shadow-sm p-8 border border-gray-100 min-h-[400px]"
        >
            <h2 className="text-2xl font-bold text-ssgmce-blue mb-6 border-b-2 border-ssgmce-orange inline-block pb-2">
                {title}
            </h2>
            <div className="prose max-w-none text-gray-700">
                {children}
            </div>
        </motion.div>
      </div>
    </>
  );
};

export default GenericPage;
