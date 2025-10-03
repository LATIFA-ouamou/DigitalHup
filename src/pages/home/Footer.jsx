const Footer = () => {
  return (
    
       <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">MarocDigitalHub</h2>
          <p className="text-sm">
            Plateforme de référence pour l’écosystème startup marocain. <br />
            Nous connectons entrepreneurs, investisseurs et talents.
          </p>
        </div>

        {/* Section 2: Liens rapides */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Liens rapides</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">home</a></li>
            <li><a href="#" className="hover:underline">événement</a></li>
            <li><a href="#" className="hover:underline">discussion</a></li>
            <li><a href="#" className="hover:underline">admin</a></li>
          </ul>
        </div>

        {/* Section 3: Informations */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Informations</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">contact</a></li>
            <li><a href="#" className="hover:underline">valeurs</a></li>
            <li><a href="#" className="hover:underline">plus informations</a></li>
          </ul>
        </div>
    </div>
    </footer>

  );
};

export default Footer;