export default function TechOverview() {
  return (
    <section id="tech-overview" className="py-16 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10 text-center">Tech Overview</h3>

        {/* Front-End */}
        <div className="mb-12">
          <h4 className="text-2xl font-semibold mb-3">1️⃣ Front-End (Client-Side)</h4>
          <p className="mb-2">This is what users see and interact with.</p>
          <p className="font-semibold">Languages:</p>
          <ul className="list-disc list-inside mb-2">
            <li>HTML → Structure of the website</li>
            <li>CSS → Styling & design</li>
            <li>JavaScript → Interactivity & logic</li>
          </ul>
          <p className="font-semibold">Frameworks:</p>
          <ul className="list-disc list-inside mb-2">
            <li>React, Vue, Angular → Build dynamic, scalable applications</li>
          </ul>
          <p className="font-semibold">Libraries:</p>
          <ul className="list-disc list-inside mb-2">
            <li>jQuery → Simplifies JS</li>
            <li>Tailwind, Bootstrap → Ready-to-use styling & components</li>
          </ul>
          <p>👉 Think of Front-End as the “face” of your website.</p>
        </div>

        {/* Back-End */}
        <div>
          <h4 className="text-2xl font-semibold mb-3">2️⃣ Back-End (Server-Side)</h4>
          <p className="mb-2">This is what powers your website behind the scenes.</p>
          <p className="font-semibold">Languages:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Node.js (JavaScript for servers)</li>
            <li>Python, PHP, Ruby, Java</li>
          </ul>
          <p className="font-semibold">Databases:</p>
          <ul className="list-disc list-inside mb-2">
            <li>MySQL, PostgreSQL → Structured data</li>
            <li>MongoDB → NoSQL, flexible storage</li>
          </ul>
          <p className="font-semibold">APIs:</p>
          <ul className="list-disc list-inside mb-2">
            <li>REST & GraphQL → Connect front-end with back-end</li>
          </ul>
          <p>👉 Back-End is the “engine” that makes everything work.</p>
        </div>
      </div>
    </section>
  );
}
