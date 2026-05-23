function App() {
  const menuItems = [
    {
      name: "Virgin Mojito 🌿",
      price: "₹49",
      desc: "Fresh mint leaves muddled with lime, sugar & sparkling soda.",
      color: "text-green-400",
    },
    {
      name: "Love Blossom 🌸",
      price: "₹59",
      desc: "A refreshing blend of cranberry and lime with a sweet fruity twist.",
      color: "text-pink-400",
    },
    {
      name: "Blue Lagoon 💙",
      price: "₹59",
      desc: "Blue curacao syrup, lemon juice & fizzy soda.",
      color: "text-cyan-400",
    },
    {
      name: "Lime Soda 🍋",
      price: "₹49",
      desc: "Sweet / Salted / Mixed classic refresher.",
      color: "text-lime-300",
    },
    {
      name: "Chilly Pulpy Pineapple 🍍🌶️",
      price: "₹59",
      desc: "Pineapple pulp blended with lime & chilli.",
      color: "text-orange-400",
    },
    {
      name: "Chilli Guava 🌶️🥭",
      price: "₹59",
      desc: "Fresh guava with chilli masala & tangy lime twist.",
      color: "text-rose-400",
    },
    {
      name: "Kala Khatta 🟣",
      price: "₹59",
      desc: "Classic desi kala khatta with icy soda refreshment.",
      color: "text-violet-400",
    },
    {
      name: "Kairi Kick 🥭",
      price: "₹99",
      desc: "Raw mango pulp with chilli, rock salt & soda.",
      color: "text-yellow-400",
    },
    {
      name: "Mango Bliss 🥭🥤",
      price: "₹99",
      desc: "Rich Alphonso mango pulp twisted with fizzy soda.",
      color: "text-amber-400",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-extrabold text-yellow-300">
            CHILLZZ
          </h1>

          <p className="text-2xl italic text-cyan-300 mt-2">
            Mocktail Menu
          </p>

          <p className="mt-4 text-lg tracking-[0.3em] text-gray-300">
            SIP. RELAX. REPEAT.
          </p>
        </div>

        <div className="grid gap-5">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-5"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className={`text-2xl font-bold ${item.color}`}>
                  {index + 1}. {item.name}
                </h2>

                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full font-bold">
                  {item.price}
                </span>
              </div>

              <p className="text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/curatedby_sakshi?igsh=MTBmcmx5azhqeGFsbw=="
            target="_blank"
            className="text-pink-400 text-2xl font-bold"
          >
            @curatedby_sakshi
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;