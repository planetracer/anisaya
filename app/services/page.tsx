export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
          Three ways to get your home clean
        </h1>
        <p className="text-body text-brand-gray mb-12">
          Compare our cleaning types side by side
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-brand-lavender-mist">
                <th className="text-left py-4 px-4 font-fredoka text-h3 text-brand-purple">Feature</th>
                <th className="text-left py-4 px-4 font-fredoka text-h3 text-brand-purple">Standard</th>
                <th className="text-left py-4 px-4 font-fredoka text-h3 text-brand-purple">Deep</th>
                <th className="text-left py-4 px-4 font-fredoka text-h3 text-brand-purple">Move-in/out</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Starting price', standard: '$120', deep: '$190', moveout: '$230' },
                { feature: 'Best for', standard: 'Recurring', deep: 'First cleans', moveout: 'Moving day' },
                { feature: 'Kitchen', standard: '✓', deep: '✓', moveout: '✓' },
                { feature: 'Bathrooms', standard: '✓', deep: '✓', moveout: '✓' },
                { feature: 'Bedrooms', standard: '✓', deep: '✓', moveout: '✓' },
                { feature: 'Living areas', standard: '✓', deep: '✓', moveout: '✓' },
              ].map((row, i) => (
                <tr key={i} className="border-b border-brand-lavender-mist">
                  <td className="py-4 px-4 font-semibold text-brand-ink">{row.feature}</td>
                  <td className="py-4 px-4 text-brand-gray">{row.standard}</td>
                  <td className="py-4 px-4 text-brand-gray">{row.deep}</td>
                  <td className="py-4 px-4 text-brand-gray">{row.moveout}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-brand-gray">
          Each service page has detailed checklists. <a href="/quote" className="text-brand-purple font-semibold hover:underline">Get your quote</a> to get started.
        </p>
      </div>
    </div>
  );
}
