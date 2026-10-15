function App() {
  const menuItems = [
    {
      name: "Virgin Mojito 🌿",
      price: "₹59",
      desc: "Fresh mint leaves muddled with lime, sugar, and topped with sparkling soda.",
      color: "text-green-400",
    },
    {
      name: "Love Blossom 🌸",
      price: "₹79",
      desc: "A refreshing blend of cranberry and lime juice.",
      color: "text-pink-400",
    },
    {
      name: "Blue Lagoon 💙",
      price: "₹79",
      desc: "A vibrant mix of blue curaçao syrup, lemon juice, and fizzy soda.",
      color: "text-cyan-400",
    },
    {
      name: "Lime Soda 🍋",
      price: "₹49",
      desc: "Simple yet satisfying—fresh lime juice with soda. (Sweet / Salted / Mixed)",
      color: "text-lime-300",
    },
    {
      name: "Chilly Pulpy Pineapple 🍍🌶️",
      price: "₹79",
      desc: "Rich pineapple pulp blended with lime, chilli, and soda for a tropical, juicy delight.",
      color: "text-yellow-300",
    },
    {
      name: "Chilli Guava 🌶️",
      price: "₹79",
      desc: "Fresh guava with chilli masala and a tangy lime twist.",
      color: "text-rose-400",
    },
    {
      name: "Kala Khatta 🍇",
      price: "₹79",
      desc: "Classic desi kala khatta with icy soda refreshment.",
      color: "text-violet-400",
    },
    {
      name: "Purple Monsoon 🫐",
      price: "₹99",
      desc: "Blueberry and kokum with lime and a hint of black salt.",
      color: "text-purple-400",
    },
    {
      name: "Citrus Bomb 🍊",
      price: "₹79",
      desc: "Orange crush with lemon, fresh mint and soda.",
      color: "text-orange-400",
    },
    {
      name: "Ruby Rush 🍓",
      price: "₹99",
      desc: "Strawberry and kokum with fresh mint.",
      color: "text-red-400",
    },
    {
      name: "Green Rush 🥝",
      price: "₹99",
      desc: "Kiwi, ginger and lime with a refreshing fizzy finish.",
      color: "text-green-300",
    },
    {
      name: "Lemon Ginger Snap 🍋",
      price: "₹99",
      desc: "Lemon with ginger and a hint of black pepper.",
      color: "text-yellow-200",
    },
    {
      name: "Konkan Sunset 🌺",
      price: "₹99",
      desc: "Kokum and orange with a warm ginger twist.",
      color: "text-pink-300",
    },
    {
      name: "Keri Kick 🥭",
      price: "₹99",
      desc: "Raw mango and mint with roasted cumin and black salt.",
      color: "text-lime-400",
    },
    {
      name: "Berry Zing 🍓🥝",
      price: "₹99",
      desc: "A refreshing blend of strawberry, kiwi and lemon.",
      color: "text-rose-300",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-extrabold text-yellow-300">
            CHILLZZ
          </h1>

          <p className="text-2xl italic text-cyan-300 mt-2">
            Mocktail Menu
          </p>

          <p className="inline-block mt-4 px-6 py-1 rounded-full bg-green-800/80 border border-green-400/40 text-yellow-200 font-semibold italic">
            Freshly Crafted Mocktails
          </p>

          <p className="mt-4 text-lg tracking-[0.3em] text-gray-300">
            SIP. RELAX. REPEAT.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-5"
            >
              <div className="flex justify-between items-center gap-3 mb-2">
                <h2 className={`text-2xl font-bold ${item.color}`}>
                  {index + 1}. {item.name}
                </h2>

                <span className="shrink-0 bg-yellow-400 text-black px-4 py-1 rounded-full font-bold">
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