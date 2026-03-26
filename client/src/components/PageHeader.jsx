const PageHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className={`relative overflow-hidden py-[clamp(3.5rem,8vw,5.5rem)] text-center text-white ${!backgroundImage ? 'bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue' : ''}`}
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
      <div className="relative z-10 mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
        <h1 className="mb-3 text-[clamp(1.45rem,4.8vw,3.2rem)] font-bold leading-tight text-shadow">{title}</h1>
        {subtitle && <p className="mx-auto max-w-3xl text-[clamp(0.92rem,2.1vw,1.2rem)] text-ssgmce-light-blue">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
