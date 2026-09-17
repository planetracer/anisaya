import Link from 'next/link';

export default function ServicesPage() {
  const tasks = [
    { category: 'Kitchen', task: 'Kitchen counters, backsplash, sink', standard: '✓', deep: '✓', moveout: '✓' },
    { category: 'Kitchen', task: 'Microwave inside and out', standard: '✓', deep: '✓', moveout: '✓' },
    { category: 'Kitchen', task: 'Stovetop', standard: '✓', deep: '✓', moveout: '✓' },
    { category: 'Kitchen', task: 'Range hood and backsplash degreased', standard: '—', deep: '✓', moveout: '✓' },
    { category: 'Kitchen', task: 'Cabinet fronts', standard: 'Spot', deep: 'Full', moveout: 'Full' },
    { category: 'Kitchen', task: 'Under and behind movable appliances', standard: '—', deep: '✓', moveout: '✓' },
    { category: 'Kitchen', task: 'Inside oven', standard: 'Add-on', deep: 'Add-on', moveout: '✓' },
    { category: 'Kitchen', task: 'Inside refrigerator', standard: 'Add-on', deep: 'Add-on', moveout: '✓' },
    { category: 'Kitchen', task: 'Inside dishwasher', standard: '—', deep: '—', moveout: '✓' },
    { category: 'Kitchen', task: 'Inside cabinets and drawers', standard: 'Add-on', deep: 'Add-on', moveout: '✓' },
    { category: 'Bathrooms', task: 'Toilets, tubs, showers, sinks, mirrors', standard: '✓', deep: '✓', moveout: '✓' },
    { category: 'Bathrooms', task: 'Grout scrubbed', standard: '—', deep: '✓', moveout: '✓' },
    { category: 'Bathrooms', task: 'Soap scum and hard water removal', standard: 'Light', deep: 'Full', moveout: 'Full' },
    { category: 'Bathrooms', task: 'Inside vanity cabinets', standard: '—', deep: '—', moveout: '✓' },
    { category: 'Living Areas', task: 'Dusting reachable surfaces', standard: '✓', deep: '✓', moveout: '✓' },
    { category: 'Living Areas', task: 'Ceiling fans, vents, light fixtures', standard: 'Partial', deep: 'Full', moveout: 'Full' },
    { category: 'Living Areas', task: 'Blinds dusted', standard: '—', deep: '✓', moveout: '✓' },
    { category: 'Living Areas', task: 'Baseboards', standard: 'Vacuumed', deep: 'Wiped', moveout: 'Wiped' },
    { category: 'Living Areas', task: 'Doors and door frames', standard: '—', deep: '✓', moveout: '✓' },
    { category: 'Living Areas', task: 'Window sills and tracks', standard: '—', deep: '✓', moveout: '✓' },
    { category: 'Living Areas', task: 'Interior window glass', standard: 'Add-on', deep: 'Add-on', moveout: '✓' },
    { category: 'Living Areas', task: 'Under and behind light furniture', standard: '—', deep: '✓', moveout: '✓' },
    { category: 'Living Areas', task: 'Inside closets and shelves', standard: '—', deep: '—', moveout: '✓' },
    { category: 'Living Areas', task: 'Wall marks spot-cleaned', standard: '—', deep: '—', moveout: '✓' },
    { category: 'Living Areas', task: 'Vacuum and mop all floors', standard: '✓', deep: '✓', moveout: '✓' },
  ];

  const kitchenTasks = tasks.filter(t => t.category === 'Kitchen');
  const bathroomTasks = tasks.filter(t => t.category === 'Bathrooms');
  const livingTasks = tasks.filter(t => t.category === 'Living Areas');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="section bg-brand-lilac-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-fredoka text-hero-mobile md:text-hero text-brand-purple mb-4">
            Our Cleaning Services
          </h1>
          <p className="text-body text-brand-gray mb-8">
            See exactly what's included in each tier. All services include professional attention to detail.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-brand-purple text-white rounded-[20px] p-8">
              <h2 className="font-fredoka text-h2-mobile md:text-h2 mb-2">Standard Cleaning</h2>
              <p className="text-h3 font-fredoka mb-1">Starting at $120</p>
              <p className="text-small mb-6 opacity-90">Weekly, biweekly, or monthly upkeep</p>
            </div>
            <div className="bg-brand-pink text-white rounded-[20px] p-8">
              <h2 className="font-fredoka text-h2-mobile md:text-h2 mb-2">Deep Cleaning</h2>
              <p className="text-h3 font-fredoka mb-1">Starting at $190</p>
              <p className="text-small mb-6 opacity-90">Not cleaned in 4+ weeks</p>
            </div>
            <div className="bg-brand-violet text-white rounded-[20px] p-8">
              <h2 className="font-fredoka text-h2-mobile md:text-h2 mb-2">Move-in / Move-out</h2>
              <p className="text-h3 font-fredoka mb-1">Starting at $230</p>
              <p className="text-small mb-6 opacity-90">Empty homes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Checklist */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-12 text-center">
            Cleaning Types — What's Included
          </h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-lilac-white">
                  <th className="text-left py-4 px-4 font-semibold text-brand-purple border-b-2 border-brand-purple">Task</th>
                  <th className="text-center py-4 px-4 font-semibold text-brand-purple border-b-2 border-brand-purple">Standard</th>
                  <th className="text-center py-4 px-4 font-semibold text-brand-purple border-b-2 border-brand-purple">Deep</th>
                  <th className="text-center py-4 px-4 font-semibold text-brand-purple border-b-2 border-brand-purple">Move-in/out</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-brand-lilac-white"><td colSpan={4} className="py-3 px-4 font-semibold text-brand-purple">Kitchen</td></tr>
                {kitchenTasks.map((task, i) => (
                  <tr key={i} className="border-b border-brand-lavender-mist hover:bg-brand-lilac-white">
                    <td className="py-3 px-4 text-brand-gray text-small">{task.task}</td>
                    <td className="text-center py-3 px-4 text-brand-purple font-semibold text-small">{task.standard}</td>
                    <td className="text-center py-3 px-4 text-brand-purple font-semibold text-small">{task.deep}</td>
                    <td className="text-center py-3 px-4 text-brand-purple font-semibold text-small">{task.moveout}</td>
                  </tr>
                ))}
                <tr className="bg-brand-lilac-white"><td colSpan={4} className="py-3 px-4 font-semibold text-brand-purple">Bathrooms</td></tr>
                {bathroomTasks.map((task, i) => (
                  <tr key={i} className="border-b border-brand-lavender-mist hover:bg-brand-lilac-white">
                    <td className="py-3 px-4 text-brand-gray text-small">{task.task}</td>
                    <td className="text-center py-3 px-4 text-brand-purple font-semibold text-small">{task.standard}</td>
                    <td className="text-center py-3 px-4 text-brand-purple font-semibold text-small">{task.deep}</td>
                    <td className="text-center py-3 px-4 text-brand-purple font-semibold text-small">{task.moveout}</td>
                  </tr>
                ))}
                <tr className="bg-brand-lilac-white"><td colSpan={4} className="py-3 px-4 font-semibold text-brand-purple">Living Areas</td></tr>
                {livingTasks.map((task, i) => (
                  <tr key={i} className="border-b border-brand-lavender-mist hover:bg-brand-lilac-white">
                    <td className="py-3 px-4 text-brand-gray text-small">{task.task}</td>
                    <td className="text-center py-3 px-4 text-brand-purple font-semibold text-small">{task.standard}</td>
                    <td className="text-center py-3 px-4 text-brand-purple font-semibold text-small">{task.deep}</td>
                    <td className="text-center py-3 px-4 text-brand-purple font-semibold text-small">{task.moveout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Not Included */}
          <div className="mt-12 bg-brand-lilac-white rounded-[20px] p-8">
            <h3 className="font-fredoka text-h3 text-brand-purple mb-4">Not Included in Any Clean</h3>
            <p className="text-body text-brand-gray mb-4">
              Outside windows • Carpet shampooing • Washing whole walls • Mold or biohazards • Moving heavy furniture
            </p>
            <p className="text-small text-brand-gray">
              <strong>Add-ons available:</strong> Laundry, dishes, garage, and patio cleaning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-purple text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-fredoka text-h2-mobile md:text-h2 mb-4">Ready to book?</h2>
          <Link href="/quote" className="btn-primary bg-white text-brand-purple hover:bg-brand-lilac-white">
            Get instant quote
          </Link>
        </div>
      </section>
    </div>
  );
}
