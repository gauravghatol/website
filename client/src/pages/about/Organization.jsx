import PageHeader from '/src/components/PageHeader';

const Organization = () => {
  return (
    <div>
      <PageHeader title="Organizational Structure" subtitle="Our Hierarchy" />

      {/* Organizational Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">Organizational Structure</h2>
          <div className="bg-white p-4 rounded-lg shadow-lg inline-block text-left max-w-4xl w-full">
             {/* Simple Hierarchy using list for accessibility/structure */}
             <div className="space-y-4 font-semibold text-center">
                <div className="border border-ssgmce-blue p-3 rounded bg-blue-50">Governing Body</div>
                <div className="h-6 w-0.5 bg-gray-400 mx-auto"></div>
                <div className="border border-ssgmce-blue p-3 rounded bg-blue-50">Local Managing Committee / CDC</div>
                <div className="h-6 w-0.5 bg-gray-400 mx-auto"></div>
                <div className="border border-ssgmce-orange p-3 rounded bg-orange-50 text-ssgmce-blue">Principal</div>
                <div className="h-6 w-0.5 bg-gray-400 mx-auto"></div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                   <div className="border p-2 rounded">Deans</div>
                   <div className="border p-2 rounded">HODs</div>
                   <div className="border p-2 rounded">Registrar</div>
                   <div className="border p-2 rounded">T&P Officer</div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organization;
