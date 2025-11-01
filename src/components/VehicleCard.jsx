import { Link } from "react-router-dom";

export default function VehicleCard({ car }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Full-width, full-height image */}
      <div className="relative w-full aspect-[4/3]">
        <img
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Info section */}
      <div className="p-4 flex flex-col">
        <h3 className="font-semibold text-lg truncate">
          {car.year} {car.make} {car.model}
        </h3>
        <p className="text-sm text-gray-500 truncate">
          {car.miles?.toLocaleString()} mi • {car.trim || "—"}
        </p>
        <p className="mt-2 text-xl font-bold text-gray-900">
          ${car.price?.toLocaleString()}
        </p>

        <Link
          to={`/vehicle/${car.id}`}
          className="mt-3 inline-block text-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}