import { useParams, Link } from "react-router-dom";
import { vehicles } from "../data/vehicles.js";

export default function Vehicle() {
  const { id } = useParams();
  const car = vehicles.find(v => String(v.id) === id);

  if (!car) {
    return (
      <section className="container py-10">
        <p className="mb-4">Vehicle not found.</p>
        <Link to="/inventory" className="text-blue-600 underline">Back to inventory</Link>
      </section>
    );
  }

  return (
    <section className="container py-10">
      {/* -------- Vehicle Header Info -------- */}
      <h1 className="text-3xl font-bold mb-2">
        {car.year} {car.make} {car.model}
      </h1>
      <p className="text-gray-500">
        {car.miles.toLocaleString()} mi • {car.trim} • {car.body}
      </p>
      <p className="mt-3 text-3xl font-extrabold">${car.price.toLocaleString()}</p>

      {/* -------- Image Gallery -------- */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {car.images?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${car.make} ${car.model} ${idx + 1}`}
            className="w-full h-56 object-cover rounded-md shadow hover:scale-[1.03] transition-transform"
          />
        ))}
      </div>

      {/* -------- Details Section -------- */}
      <div className="mt-10 bg-white rounded-lg shadow p-6 md:w-2/3">
        <ul className="space-y-2 text-gray-700">
          <li><strong>Drivetrain:</strong> {car.drivetrain}</li>
          <li><strong>Transmission:</strong> {car.transmission}</li>
          <li><strong>Engine:</strong> {car.engine}</li>
        </ul>

        <div className="mt-6 flex gap-3 flex-wrap">
          <Link
            to="/contact"
            className="px-5 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Contact Dealer
          </Link>
          <Link
            to="/inventory"
            className="px-5 py-3 border rounded-md hover:bg-gray-100 transition"
          >
            Back to Inventory
          </Link>
        </div>
      </div>
    </section>
  );
}