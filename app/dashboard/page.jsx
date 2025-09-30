import ChartAreaGradient from "../../components/chart";

// NOTE: The SVG icons remain the same.
const Users = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 opacity-90"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const CreditCard = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 opacity-90"
  >
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);
const TrendingUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 opacity-90"
  >
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="18 7 22 7 22 11" />
  </svg>
);

const Dashpage = () => {
  return (
    // Apply a modern-sans font (Rajdhani) to the base
    <div className="flex flex-col min-h-screen p-6 gap-6 bg-slate-50 font-modern-sans">
      {/* Dashboard Title - Use the prominent futuristic font (Orbitron) */}
      <h1 className="text-4xl font-futuristic font-extrabold text-gray-800 tracking-widest">
        Giddu-gala Dhaabbata
      </h1>

      {/* Top grid: 3 small panels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Members Panel */}
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl shadow-indigo-200 p-6 flex flex-col justify-between transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold opacity-95">
                Miseensota Guutuu
              </h3>
              <p className="text-sm opacity-70 mt-1">Hawaasa keenya</p>
            </div>
            {/* ICON ADDED HERE */}
            <Users />
          </div>
          <p className="text-5xl font-extrabold mt-4">120</p>
        </div>

        {/* Current Balance Panel */}
        <div className="rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 text-white shadow-xl shadow-teal-200 p-6 flex flex-col justify-between transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold opacity-95">
                Balansi Amma Jiru
              </h3>
              <p className="text-sm opacity-70 mt-1">Dhaabbata keenya</p>
            </div>
            {/* ICON ADDED HERE */}
            <CreditCard />
          </div>
          <p className="text-5xl font-extrabold mt-4">$15,000</p>
        </div>

        {/* Contributions This Month Panel */}
        <div className="rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-xl shadow-orange-200 p-6 flex flex-col justify-between transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold opacity-95">Gumaacha</h3>
              <p className="text-sm opacity-70 mt-1">Ji’a Kana</p>
            </div>
            {/* ICON ADDED HERE */}
            <TrendingUp />
          </div>
          <p className="text-5xl font-extrabold mt-4">$2,500</p>
        </div>
      </div>

      {/* Middle section with chart */}
      <div className="rounded-2xl bg-white shadow-lg p-6 flex-1 min-h-[300px] border border-gray-100">
        <h2 className="text-xl font-futuristic font-semibold text-gray-700 mb-4 border-b pb-2 tracking-wide">
          Hambaalee Maallaqaa (Ji'oota Ja'an Darban)
        </h2>
        <div className="h-full">
          <ChartAreaGradient />
        </div>
      </div>

      {/* Upcoming Events Table */}
      <div className="rounded-2xl bg-white shadow-lg p-6 overflow-x-auto border border-gray-100">
        <h2 className="text-xl font-futuristic font-semibold text-gray-700 mb-4 border-b pb-2 tracking-wide">
          Taateewwan Dhufan
        </h2>
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {/* Table headers use the new modern-sans/Rajdhani */}
              <th className="py-3 px-4 text-sm font-modern-sans font-medium text-gray-600 uppercase tracking-widest">
                Taatee
              </th>
              <th className="py-3 px-4 text-sm font-modern-sans font-medium text-gray-600 uppercase tracking-widest">
                Guyyaa
              </th>
              <th className="py-3 px-4 text-sm font-modern-sans font-medium text-gray-600 uppercase tracking-widest">
                Bakki
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 transition-colors hover:bg-indigo-50/30">
              <td className="py-3 px-4 text-gray-800">Walgahii Hawaasaa</td>
              {/* Dates use the monospaced look for a technical/futuristic feel */}
              <td className="py-3 px-4 text-gray-600 font-mono text-sm">
                2024-07-15
              </td>
              <td className="py-3 px-4 text-gray-600">Keenyaa Hawaasaa</td>
            </tr>
            <tr className="border-b border-gray-100 transition-colors hover:bg-indigo-50/30">
              <td className="py-3 px-4 text-gray-800">
                Taatee Maallaqaa Qabaachuuf
              </td>
              <td className="py-3 px-4 text-gray-600 font-mono text-sm">
                2024-08-20
              </td>
              <td className="py-3 px-4 text-gray-600">Paarkii Naannoo</td>
            </tr>
            <tr className="border-b border-gray-100 transition-colors hover:bg-indigo-50/30">
              <td className="py-3 px-4 text-gray-800">Walgahii Waggaa</td>
              <td className="py-3 px-4 text-gray-600 font-mono text-sm">
                2024-09-10
              </td>
              <td className="py-3 px-4 text-gray-600">Mana Marii Magaalaa</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashpage;
