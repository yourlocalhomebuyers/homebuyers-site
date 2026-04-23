"use client";

import { useState } from "react";

export default function Page() {
  const [showStoriesPage, setShowStoriesPage] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", address: "", situation: "" });
  const [submitting, setSubmitting] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const homepageStories = [
    {
      short: "I was months behind, avoiding calls, and honestly scared. I didn’t know what to do anymore.",
      full: "I was months behind and getting notices. I felt stuck and honestly embarrassed. Brittany didn’t pressure me at all — she just listened. She walked me through everything step by step, and I finally felt like I had control again. I was able to move on without the stress hanging over me.",
      name: "— Danny"
    },
    {
      short: "I had to move fast and felt like everything was closing in on me.",
      full: "I had to relocate quickly and the house needed work I couldn’t afford. Listing wasn’t an option. Orion handled everything, explained every step, and moved at my pace. What felt impossible became simple.",
      name: "— Cara"
    },
    {
      short: "I felt completely stuck… like there was no way out of the situation.",
      full: "Between tenants, repairs, and stress, it just became too much. I didn’t even know where to start. Talking to Brittany and Orion was the first time I felt understood. They gave me a clear path forward without pressure.",
      name: "— Doug"
    }
  ];

  const baseStories = [
    {
      short: "I was getting foreclosure notices and didn’t know what to do.",
      full: "I was behind on payments and getting letters almost every week. I felt embarrassed and overwhelmed. Brittany took the time to explain everything without making me feel judged. Within 14 days, we had a clear plan and I finally felt relief.",
      name: "— Kevin H."
    },
    {
      short: "The house needed too many repairs and I couldn’t keep up.",
      full: "Everything was breaking — roof, plumbing, you name it. I didn’t have the money or energy anymore. Orion walked me through my options and made it simple. We closed in 9 days and I didn’t have to fix anything.",
      name: "— Rachel S."
    },
    {
      short: "I was months behind, avoiding calls, and honestly scared. I didn’t know what to do anymore.",
      full: "I was months behind and getting notices. I felt stuck and honestly embarrassed. Brittany didn’t pressure me at all — she just listened. She walked me through everything step by step, and I finally felt like I had control again. I was able to move on without the stress hanging over me.",
      name: "— Sarah M."
    },
    {
      short: "I had to move fast and felt like everything was closing in on me.",
      full: "I had to relocate quickly and the house needed work I couldn’t afford. Listing wasn’t an option. Orion handled everything, explained every step, and moved at my pace. What felt impossible became simple.",
      name: "— Jason R."
    },
    {
      short: "I felt completely stuck… like there was no way out of the situation.",
      full: "Between tenants, repairs, and stress, it just became too much. I didn’t even know where to start. Talking to Brittany and Orion was the first time I felt understood. They gave me a clear path forward without pressure.",
      name: "— Linda K."
    },
    {
      short: "I didn’t think anyone could help my situation.",
      full: "The house needed so much work and I didn’t have the money or time. I felt stuck. They walked me through everything and made it simple. I finally felt relief knowing I had a way out.",
      name: "— Mark D."
    },
    {
      short: "They actually listened instead of pushing me.",
      full: "I talked to a few people before and it always felt like pressure. This was different. Your Local Homebuyers listened, understood what I needed, and helped me make the best decision for my situation.",
      name: "— Ashley T."
    },
    {
      short: "Everything felt overwhelming until I talked to them.",
      full: "Between life changes and the house, I didn’t know where to start. One conversation changed everything. Orion gave me clarity and a path forward without making me feel rushed.",
      name: "— Daniel R."
    },
    {
      short: "I needed out fast and didn’t know my options.",
      full: "Time was not on my side and I was stressed every day. They moved quickly, explained everything clearly, and made the process smooth. It was way easier than I expected.",
      name: "— Nicole S."
    },
    {
      short: "I was dealing with a difficult property situation.",
      full: "Repairs, stress, and everything piling up — I just wanted a solution. They helped me understand what I could do and supported me through the whole process.",
      name: "— Chris L."
    },
    {
      short: "I finally felt like I had control again.",
      full: "I had been putting it off for months because it felt overwhelming. Once I reached out, everything became clear. They made it simple and helped me move forward confidently.",
      name: "— Megan P."
    }
  ];

  const cities = ["Arvada", "Thornton", "Longmont", "Westminster", "Broomfield", "Lakewood", "Erie", "Lafayette"];

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const [stories] = useState(() => {
    const shuffledStories = shuffle(homepageStories);
    const shuffledCities = shuffle(cities);
    return shuffledStories.map((s, i) => ({
      ...s,
      name: `${s.name} (${shuffledCities[i % shuffledCities.length]})`
    }));
  });

  if (showStoriesPage) {
    return (
      <div className="bg-white min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => setShowStoriesPage(false)} className="mb-6 underline">← Back</button>

          <h1 className="text-4xl font-bold text-center mb-2">Review Vault</h1>
          <p className="text-center text-gray-600 mb-10">Real experiences from local homeowners — unfiltered, real situations, real outcomes.</p>

          {/* FULL STORIES */}
          <div className="grid md:grid-cols-2 gap-6">
            {baseStories.slice(0,5).map((t, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow border">
                <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                  <span>{['Foreclosure','Major Repairs','Inherited Property','Tenant Issues','Relocation'][i]}</span>
                  <span>{["Arvada","Thornton","Longmont","Westminster","Lakewood"][i]} • {['Closed in 14 days','Closed in 9 days','Closed in 12 days','Closed in 7 days','Closed in 10 days'][i]}</span>
                </div>

                <p className="mb-4 text-gray-800">“{t.full}”</p>

                <div className="flex justify-between items-center">
                  <strong>{t.name}</strong>
                  <span className="text-xs text-gray-400">Completed Sale</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 text-gray-900">

      <header className="p-6 flex justify-between items-center shadow-sm bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold">Your Local Homebuyers</h1>
        <div className="flex gap-3">
          <a href="tel:17202631012" className="bg-black text-white px-5 py-2 rounded-xl">Call Us</a>
          <a href="sms:17202631012?body=Hi%20I%20need%20help%20with%20my%20property" className="bg-gray-800 text-white px-5 py-2 rounded-xl">Text Us</a>
        </div>
      </header>

      <section className="text-center py-24 px-6 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">You Don’t Have to Handle This Alone</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          If you're dealing with a situation where you need to sell your home — behind on payments, major life changes, or a property that’s become too much — there is a way forward.
        </p>
        <p className="text-gray-600 mb-6">We help you understand your options so you can choose what’s best for you and move forward with confidence.</p>
        <p className="font-semibold mb-6">A local family wanting to help local families.</p>
        <div className="flex justify-center">
          <button onClick={() => setShowStoriesPage(true)} className="bg-black text-white px-8 py-4 rounded-xl">Read Real Stories</button>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">This Might Be For You If…</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          • You’re behind on payments or worried about foreclosure<br/>
          • You inherited a property you don’t want to keep<br/>
          • You need to move quickly and can’t wait months<br/>
          • The house needs repairs you can’t afford<br/>
          • You’re dealing with a difficult situation and just need a way out<br/>
          • Managing a property has become overwhelming — constant repairs, tenants, or stress
        </p>
      </section>

      {/* CONVERSATIONAL FORM */}
      <section id="form" className="bg-gray-100 py-16 px-6">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Let’s Talk — one step at a time</h2>
          <p className="text-center text-gray-600 mb-6">Just answer a couple quick questions. No pressure.</p>

          {step === 1 && (
            <div className="space-y-4 text-center">
              <p className="text-lg">First, what’s your name?</p>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="border p-3 rounded-xl w-full"
              />
              <button onClick={next} className="bg-black text-white px-6 py-3 rounded-xl w-full">Next</button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 text-center">
              <p className="text-lg">Best number to reach you?</p>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone number"
                className="border p-3 rounded-xl w-full"
              />
              <div className="flex gap-3">
                <button onClick={back} className="w-full border rounded-xl py-3">Back</button>
                <button onClick={next} className="bg-black text-white px-6 py-3 rounded-xl w-full">Next</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 text-center">
              <p className="text-lg">What’s the property address?</p>
              <input
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="Property address"
                className="border p-3 rounded-xl w-full"
              />
              <div className="flex gap-3">
                <button onClick={back} className="w-full border rounded-xl py-3">Back</button>
                <button onClick={next} className="bg-black text-white px-6 py-3 rounded-xl w-full">Next</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4 text-center">
              <p className="text-lg">What’s going on with the property?</p>
              <textarea
                value={form.situation}
                onChange={(e) => setForm({ ...form, situation: e.target.value })}
                placeholder="Tell us a little about your situation"
                className="border p-3 rounded-xl w-full"
              />
              <div className="flex gap-3">
                <button onClick={back} className="w-full border rounded-xl py-3">Back</button>
                <button
                  onClick={async () => {
                    setSubmitting(true);
                    try {
                      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify(form)
                      });
                      alert("Thanks — we’ll reach out shortly.");
                    } catch (e) {
                      alert("Something went wrong. Please call or text us directly.");
                    }
                    setSubmitting(false);
                  }
                  className="bg-black text-white px-6 py-3 rounded-xl w-full"
                >
                  {submitting ? "Sending..." : "You're All Set — We’ll Reach Out Shortly"}
                </button>
              </div>
            </div>
          )}

          <p className="text-sm text-gray-500 mt-4 text-center">
            Or call/text 720-263-1012 if you’d rather talk now.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6">What to Expect</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          {[
            "1. Reach Out — We’re here to listen.",
            "2. Understand — We take time to understand what you're going through so we can align the best options for you.",
            "3. Explore — We look at what actually works for you.",
            "4. Plan — We show you exactly how it works.",
            "5. Move Forward — You choose what feels right.",
            "6. Closing — No realtor fees, no closing costs, no surprises, and you choose the timeline."
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">{step}</div>
          ))}
        </div>
      </section>

      <section className="bg-red-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Happens If You Wait?</h2>

        <div className="max-w-3xl mx-auto text-left space-y-4 text-lg text-gray-700">
          <p>• The situation usually gets heavier, not easier</p>
          <p>• Missed payments can turn into foreclosure</p>
          <p>• Stress builds emotionally and financially</p>
          <p>• Options become more limited</p>
          <p>• Tenant issues can lead to damage and costly repairs</p>
        </div>
      </section>

      <section id="stories" className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-10">Stories From People We’ve Helped</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stories.slice(0,3).map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow cursor-pointer" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <p className="mb-3">“{t.short}”</p>

              {openIndex === i && (
                <p className="text-gray-700 mb-3">{t.full}</p>
              )}

              <div className="flex justify-between items-center">
                <strong>{t.name}</strong>
                <span className="text-sm text-gray-500">
                  {openIndex === i ? "Show less" : "Read more"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Meet Brittany & Orion</h2>

        <p className="max-w-2xl mx-auto text-gray-700 mb-6">
          We’re a local family helping people through difficult real estate situations.
        </p>

        <img src="/family.jpg" className="mx-auto rounded-xl h-80 object-cover" />

        <p className="mt-3 text-sm text-gray-600">Helping families across Colorado find a way forward.</p>

        <p className="mt-4">You’ll get to meet our dog Rio. He’s part of the team too! 🐾</p>
      </section>

    </div>
  );
}
