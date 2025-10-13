import React from 'react';

function CardeStartup({ startup }) {
  // startup peut être undefined pendant loading => guard
  if (!startup) return null;

  const { name, sector, description, image } = startup;

  return (
    <div className="bg-[#C9E3CC] rounded-md shadow p-4">
      <div className="h-40 w-full overflow-hidden rounded-md mb-3">
        <img
          src={image || '/images/placeholder.png'}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-bold text-green-900 text-lg">{name}</h3>
      <p className="text-yellow-600 font-semibold">{sector}</p>
      <p className="text-gray-700 text-sm mt-2">{description}</p>
    </div>
  );
}

export default CardeStartup;
