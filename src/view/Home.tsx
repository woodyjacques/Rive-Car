
import logoImage from '../assets/logoIco.webp';

function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen text-white">

      <header className="flex flex-col items-center justify-center h-screen p-8 text-center">
        <img 
          src={logoImage} 
          alt="App Logo" 
          className="w-32 h-32 rounded-full shadow-lg mb-4 transform transition duration-500 hover:scale-110"
        />
        <h1 className="text-5xl font-bold text-neon-green mb-4">
          Revoluciona tus Revisiones de Vehículos
        </h1>
        <p className="text-xl mb-8 max-w-lg text-gray-300">
          La app que automatiza inspecciones, genera reportes y los envía automáticamente. 
          Aumenta la eficiencia y lleva tu negocio al siguiente nivel.
        </p>
        <button className="bg-gray-500 hover:bg-lime-600 text-gray-900 py-3 px-6 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-md">
          Comienza Ahora
        </button>
      </header>

      <section className="flex flex-wrap justify-center items-center gap-8 py-20 px-6 bg-gradient-to-br from-black to-gray-800">
        <div className="max-w-sm bg-gray-900 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Automatización Total</h2>
          <p className="text-gray-400">
            Registra y controla inspecciones de manera automática con nuestro sistema inteligente.
          </p>
        </div>
        <div className="max-w-sm bg-gray-900 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-neon-green mb-4">Generación de Reportes PDF</h2>
          <p className="text-gray-400">
            Obtén reportes detallados de cada inspección en PDF, listos para almacenar y compartir.
          </p>
        </div>
        <div className="max-w-sm bg-gray-900 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">Envíos Automatizados</h2>
          <p className="text-gray-400">
            Envía los reportes de inspección a los destinatarios de forma instantánea por correo y WhatsApp.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Todo lo que necesitas en una sola aplicación
        </h2>
        <img 
          src={ logoImage} 
          alt="App Interface" 
          className="w-2/3 max-w-lg rounded-lg shadow-lg mb-8 transform transition duration-500 hover:scale-105"
        />
        <p className="text-lg text-gray-200 max-w-md">
          Descubre una nueva forma de gestionar tus inspecciones de vehículos, con un diseño moderno 
          y tecnología de vanguardia para mejorar la eficiencia de tu equipo.
        </p>
      </section>

      <section className="flex flex-col items-center py-16 bg-gradient-to-br from-black to-gray-900">
        <h2 className="text-3xl font-bold text-neon-green mb-4">
          ¿Listo para el cambio?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-md text-center">
          Únete hoy y optimiza tus procesos de inspección con nuestra plataforma de última tecnología.
        </p>
        <button className="bg-gray-500 hover:bg-lime-600 text-gray-900 py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-md">
          Regístrate Ahora
        </button>
      </section>

      <footer className="flex justify-center items-center py-4 bg-black text-gray-600">
        <p>&copy; 2024 Inspección Inteligente de Vehículos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
