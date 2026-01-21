const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white py-10 md:py-12 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-shadow">{title}</h1>
        {subtitle && <p className="text-base md:text-lg text-ssgmce-light-blue">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
