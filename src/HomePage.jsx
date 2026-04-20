import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-6 flex justify-between items-center shadow-sm bg-white">
        <h1 className="text-2xl font-bold">Your Local Homebuyers</h1>
        <button className="bg-black text-white px-4 py-2 rounded-xl">Get Help Now</button>
      </header>

      <section className="text-center py-24 px-6 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          When Life Changes Fast… You Still Have Options
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          If you're dealing with a situation where you need to sell your home — you're not alone.
        </p>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Tell Us What’s Going On</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input className="border p-3 rounded-xl" placeholder="Full Name" />
            <input className="border p-3 rounded-xl" placeholder="Phone" />
            <input className="border p-3 rounded-xl md:col-span-2" placeholder="Address" />
            <textarea className="border p-3 rounded-xl md:col-span-2" placeholder="Situation"></textarea>
          </div>
          <button className="mt-6 w-full bg-black text-white py-3 rounded-xl">Get My Options</button>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Meet Brittany & Orion</h2>
            <p className="text-gray-700 mb-4">
              We started Your Local Homebuyers to help people through difficult situations with real options.
            </p>
            <p>And yes — you may even meet our dog Rio 🐾</p>
          </div>
          <img src="/family.jpg" className="rounded-2xl" />
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">Brittany, Orion, and Rio — local to Colorado</p>
      </section>

      <footer className="text-center p-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Your Local Homebuyers
      </footer>
    </div>
  );
}