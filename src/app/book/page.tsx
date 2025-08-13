export default function Book() {
  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Book a Session</h1>
      <p className="mt-2 text-sm text-gray-600">
        This is a placeholder page. We’ll embed a real calendar and payments next.
      </p>

      <section className="mt-8 space-y-4">
        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">Bike Fit</h2>
          <p className="mt-1 text-gray-700">Comprehensive dynamic fit session.</p>
          <button
            className="mt-4 rounded-lg border px-4 py-2 hover:bg-gray-50"
            onClick={() => alert('Calendar embed coming soon')}
          >
            Book
          </button>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">MTB / Snowboard Coaching</h2>
          <p className="mt-1 text-gray-700">Technique, analysis, and progression planning.</p>
          <button
            className="mt-4 rounded-lg border px-4 py-2 hover:bg-gray-50"
            onClick={() => alert('Calendar embed coming soon')}
          >
            Book
          </button>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-xl font-semibold">Consultation</h2>
          <p className="mt-1 text-gray-700">Remote consult for training, fit, or equipment.</p>
          <button
            className="mt-4 rounded-lg border px-4 py-2 hover:bg-gray-50"
            onClick={() => alert('Calendar embed coming soon')}
          >
            Book
          </button>
        </div>
      </section>
    </main>
  );
}
