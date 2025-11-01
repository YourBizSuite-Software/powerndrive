// src/data/vehicles.js

// --- Image loader -----------------------------------------------------------
// Load any 1..11 .JPEG files inside src/assets/<Folder>/
const ALL = import.meta.glob("../assets/*/*.{JPEG,JPEG}", { eager: true });
function loadImages(folder) {
  // Grab files that match ../assets/<folder>/<n>.JPEG (1..11), keep numeric order
  const imgs = [];
  for (let i = 1; i <= 11; i++) {
    const key = `../assets/${folder}/${i}.JPEG`;
    if (ALL[key]?.default) imgs.push(ALL[key].default);
  }
  return imgs;
}

// --- Helpers for random filler fields --------------------------------------
const trims = ["SE", "Sport", "Limited", "XLT", "LE", "Premium", "", "Base"];
const bodies = ["Sedan", "SUV", "Truck", "Coupe", "Wagon", "Hatchback", ""];
const drivetrains = ["FWD", "RWD", "AWD", "4WD", ""];
const transmissions = ["Automatic", "Manual", "CVT", ""];
const engines = ["I4", "V6", "V8", "Turbo I4", "Hybrid", ""];
const rpick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const rint = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const priceForYear = (y) => {
  if (y >= 2021) return rint(25000, 65000);
  if (y >= 2018) return rint(16000, 42000);
  if (y >= 2014) return rint(8000, 26000);
  return rint(5000, 15000);
};

// miles: use provided when given; otherwise random by age
const milesByYear = (y) => {
  const age = Math.max(0, new Date().getFullYear() - y);
  const base = 12000 * age;
  return rint(Math.max(15000, base * 0.6), Math.max(30000, base * 1.2));
};

// --- Base list with your folder names and specs ----------------------------
// For items where you gave exact miles, I set them; otherwise we'll randomize.
const base = [
  { folder: "2016ram", year: 2016, make: "Dodge", model: "Ram" },
  { folder: "2015cherokee", year: 2015, make: "Jeep", model: "Grand Cherokee" },
  { folder: "2019GmcAcadia", year: 2019, make: "GMC", model: "Acadia" },
  { folder: "2017FordExplorer", year: 2017, make: "Ford", model: "Explorer" },
  { folder: "2013ChryslerTown", year: 2013, make: "Chrysler", model: "Town & Country" },
  { folder: "2017SubaruOutback", year: 2017, make: "Subaru", model: "Outback" },
  { folder: "2020fordexpedition", year: 2020, make: "Ford", model: "Expedition Max" },
  { folder: "2017VolvoXc60", year: 2017, make: "Volvo", model: "XC60" },
  { folder: "2019BMW7Series", year: 2019, make: "BMW", model: "7 Series" },
  { folder: "2017genesisg80", year: 2017, make: "Hyundai", model: "Genesis G80" },
  { folder: "2021FordExpeditionXlt", year: 2021, make: "Ford", model: "Expedition XLT" },
  { folder: "2013KiaOptime", year: 2013, make: "Kia", model: "Optima", miles: 123000 }, // folder name spelled "Optime"
  { folder: "2013DodgeChargerSRT", year: 2013, make: "Dodge", model: "Charger SRT", miles: 125000 },
  { folder: "2016HyundaiSonataSport2.4", year: 2016, make: "Hyundai", model: "Sonata Sport 2.4" },
  { folder: "2014MercedesCLA250", year: 2014, make: "Mercedes-Benz", model: "CLA 250", miles: 70000 },
  { folder: "2007MercedesC550", year: 2007, make: "Mercedes-Benz", model: "C550", miles: 125000 },
  { folder: "2016FordMustangV6", year: 2016, make: "Ford", model: "Mustang V6" },
  { folder: "2016FordMustangGT", year: 2016, make: "Ford", model: "Mustang GT", miles: 26000 },
  { folder: "2017HyundaiSonataSport", year: 2017, make: "Hyundai", model: "Sonata Sport" },
  { folder: "2016HyundaiSonataLimited", year: 2016, make: "Hyundai", model: "Sonata Limited", miles: 126000 },
  { folder: "2021FordMustangGTPremium", year: 2021, make: "Ford", model: "Mustang GT Premium", miles: 16000 },
  { folder: "2014HyundaiSonataLimited", year: 2014, make: "Hyundai", model: "Sonata Limited", miles: 80000 },
  { folder: "2015HyundaiSonata2.0tLimited", year: 2015, make: "Hyundai", model: "Sonata 2.0T Limited" },
  { folder: "2015HyundaiGenesis3.8", year: 2015, make: "Hyundai", model: "Genesis 3.8", miles: 60000 },
  { folder: "2014ChevroletTraverseLE", year: 2014, make: "Chevrolet", model: "Traverse LE", miles: 125000 },
  { folder: "2013HyundaiSonataLimited", year: 2013, make: "Hyundai", model: "Sonata Limited", miles: 74000 },
  { folder: "2019Chrysler300", year: 2019, make: "Chrysler", model: "300 Limited" },
  { folder: "2014HyundaiSonataSE", year: 2014, make: "Hyundai", model: "Sonata SE" },
  { folder: "2015ToyotaCamrySE", year: 2015, make: "Toyota", model: "Camry SE", miles: 115000 },
  { folder: "2021FordExpeditionPlatinumMax", year: 2021, make: "Ford", model: "Expedition Platinum Max", miles: 56000 },
  { folder: "2015FordMustang", year: 2015, make: "Ford", model: "Mustang (Manual)", miles: 80000 },
];

// --- Build final vehicles array --------------------------------------------
export const vehicles = base.map((item, idx) => {
  const images = loadImages(item.folder);
  const miles = typeof item.miles === "number" ? item.miles : milesByYear(item.year);
  const price = item.price ?? priceForYear(item.year);

  return {
    id: idx + 1,
    year: item.year,
    make: item.make,
    model: item.model,
    price,
    miles,
    image: images[0] || "", // primary image
    images,                 // full gallery

    // simple placeholders for UI fields you might reference
    trim: rpick(trims),
    body: rpick(bodies),
    drivetrain: rpick(drivetrains),
    transmission: rpick(transmissions),
    engine: rpick(engines),

    // no VIN per your request
    // folder reference (handy for debugging)
    folder: item.folder,
  };
});