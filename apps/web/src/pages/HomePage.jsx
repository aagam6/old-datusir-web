import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
const WHATSAPP_LINK = "https://wa.me/919825249281?text=Hi, I want to enquire about admission for Class 11/12 Commerce.";
const ACADEMY_RESULTS = {
  "2024-25": [{
    name: "Harsh Sharma",
    marks: "A/C: 100 | Stats: 100",
    percent: "94%"
  }, {
    name: "Muskan Lakhotia",
    marks: "A/C: 98",
    percent: "98%"
  }, {
    name: "Yukti Jain",
    marks: "A/C: 99",
    percent: "96%"
  }, {
    name: "Parth Shah",
    marks: "A/C: 100 | Stats: 100",
    percent: "94%"
  }, {
    name: "Nandini Acharya",
    marks: "A/C: 100 | Stats: 100",
    percent: "92%"
  }, {
    name: "Yashika Rathi",
    marks: "A/C: 96",
    percent: "95.4%"
  }],
  "2023-24": [{
    name: "Bakshish Bhardwaj",
    marks: "A/C: 100 | Stats: 100",
    percent: "Top Rank"
  }, {
    name: "Dhruvil Jadav",
    marks: "A/C: 100 | Stats: 99",
    percent: "Top Rank"
  }, {
    name: "Pranjal Gandhi",
    marks: "A/C: 95",
    percent: "88%"
  }, {
    name: "Priya Rupani",
    marks: "A/C: 90",
    percent: "90%"
  }],
  "2022-23": [{
    name: "Krisha Shah",
    marks: "A/C: 100 | Stats: 94",
    percent: "95%"
  }, {
    name: "Vanshita Jain",
    marks: "A/C: 100",
    percent: "95%"
  }]
};
const TopperCard = ({
  topper
}) => <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center transition-all hover:shadow-xl hover:-translate-y-1">
    <div className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase">Topper</div>
    <h3 className="text-xl font-bold text-gray-900">{topper.name}</h3>
    <p className="text-orange-600 font-extrabold text-3xl my-2">{topper.percent}</p>
    <p className="text-gray-500 font-medium text-sm">{topper.marks}</p>
  </div>;
export default function HomePage() {
  const years = useMemo(() => Object.keys(ACADEMY_RESULTS).sort((a, b) => b.localeCompare(a)), []);
  const [year, setYear] = useState(years[0]);
  const currentToppers = ACADEMY_RESULTS[year];
  return <div className="bg-white text-gray-900 font-sans selection:bg-orange-100 scroll-smooth">
      <Helmet>
        <title>Dattu Sir's Commerce Academy | Ahmedabad</title>
        <meta name="description" content="Top Commerce academy in Ahmedabad for Class 11 & 12." />
      </Helmet>

      {/* NAVBAR (PHOTO 1: LOGO) */}
      <nav className="fixed top-0 w-full bg-[#0b2545] text-white z-50 shadow-lg h-20">
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://horizons-cdn.hostinger.com/b60b1d05-d02d-4aa2-822a-4fdb9f13b074/dca-logo-tHJbU.png" alt="Logo" className="h-12 w-auto" />
            <div className="font-black text-xl uppercase tracking-tighter leading-tight">
              Dattu Sir's <span className="text-orange-400 block text-xs tracking-widest">Academy</span>
            </div>
          </div>
          <div className="hidden md:flex gap-10 font-bold text-[13px] uppercase tracking-widest">
            <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
            <a href="#why-us" className="hover:text-orange-400 transition-colors">Why Us</a>
            <a href="#results" className="hover:text-orange-400 transition-colors">Results</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
          </div>
          <a href={WHATSAPP_LINK} className="bg-orange-500 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-orange-600 transition-all shadow-lg active:scale-95">
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative bg-[#0b2545] pt-52 pb-32 overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-block bg-orange-400/10 text-orange-400 font-bold tracking-widest uppercase text-[12px] px-6 py-2 rounded-full border border-orange-400/20 mb-8">
            Admission Open
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tight">
            Ahmedabad’s Trusted <br />
            <span className="text-orange-400">Commerce Academy</span>
          </h1>
          <div className="mt-8 text-xl md:text-2xl text-gray-300 font-medium">
            Class 11 & 12 Commerce | Accounts | Statistics
          </div>
          <div className="mt-6 text-lg text-white italic font-serif opacity-90">
            "There Is No Substitute for Hard Work."
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-orange-400 font-bold tracking-wide">
            ⚠️ Limited Seats Available
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-orange-500/20 active:scale-95 transition-all">
              WhatsApp Now
            </a>
            <a href="tel:+919825249281" className="bg-white text-[#0b2545] px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 shadow-xl active:scale-95 transition-all">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* WHY US SECTION (PHOTO 2: DATTU SIR) */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Photo with Badge */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative max-w-md w-full">
              <img src="https://horizons-cdn.hostinger.com/b60b1d05-d02d-4aa2-822a-4fdb9f13b074/1-AzeLd.webp" alt="Dattu Sir" className="rounded-[40px] shadow-2xl border-4 border-white w-full object-cover aspect-[4/5]" />
              <div className="absolute top-1/2 -right-6 lg:-right-10 bg-orange-500 text-white px-6 py-3 rounded-2xl font-black shadow-xl rotate-12 text-sm z-20">
                EST. 2003
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-black text-[#0b2545] mb-10">
              Building <span className="border-b-8 border-orange-400 pb-2">Careers for 23 Years</span>
            </h2>

            <div className="bg-white border-2 border-dashed border-[#0b2545]/20 p-8 rounded-3xl mb-12 relative">
              <p className="text-xl text-gray-700 italic leading-relaxed font-medium">
                "When I started in 2003, I never imagined that on this day I would be writing this. Today, thousands of my students are in professional fields like CA, MBA and Government departments."
              </p>
            </div>

            {/* Checklist items in white boxes */}
            <div className="space-y-4">
              {['Build Concepts', 'Build Confidence', 'Build Careers'].map((text, i) => <div key={i} className="flex items-center gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center font-black text-xl group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    ✓
                  </div>
                  <span className="font-extrabold text-2xl text-[#0b2545] uppercase tracking-tight">{text}</span>
                </div>)}
            </div>
          </div>

        </div>
      </section>

      {/* RESULTS SECTION */}
      <section id="results" className="py-24 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-[#0b2545] mb-2">Proven Excellence</h2>
          <p className="text-gray-500 mb-12 italic tracking-wide">"There is no substitute for hard work"</p>
          <div className="inline-flex bg-white p-1.5 rounded-2xl shadow-inner border border-gray-200 mb-12">
            {years.map(yr => <button key={yr} onClick={() => setYear(yr)} className={`px-10 py-3.5 rounded-xl text-sm font-bold transition-all ${year === yr ? 'bg-[#0b2545] text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}>
                {yr}
              </button>)}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentToppers.map((t, idx) => <TopperCard key={idx} topper={t} />)}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-[#0b2545] text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black mb-8 underline decoration-orange-500 underline-offset-8">Visit the Academy</h2>
            <p className="text-2xl font-bold mb-8">3rd floor purushottam mahal Beside Swaminarayan clock tower
<br />Ahmedabad, Gujarat 380008</p>
            <div className="mb-10 text-4xl font-black tracking-tight underline decoration-orange-400">
              <a href="tel:+919825249281" className="hover:text-orange-400 transition-colors">+91 98252 49281</a>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-green-500 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-green-600 shadow-xl active:scale-95 transition-all">
              Start WhatsApp Chat
            </a>
          </div>
          <div className="h-[450px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7573607556865!2d72.6039916!3d22.9959483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85e9da07067f%3A0xcd180c2a69ebe1f7!2sDattu%20sir&#39;s%20Commerce%20Academy!5e0!3m2!1sen!2sin!4v1777794016900!5m2!1sen!2sin" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#081b33] text-center text-gray-500">
        <p className="font-bold tracking-wide">© {new Date().getFullYear()} Dattu Sir's Commerce Academy. Ahmedabad.</p>
      </footer>
    </div>;
}