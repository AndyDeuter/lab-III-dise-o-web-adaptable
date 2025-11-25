import Button from './ui/Button';
import { FaRocket, FaPlay, FaCheck, FaUsers, FaHeadset, FaChartLine } from 'react-icons/fa';

function Hero() {
  const features = [
    { icon: FaCheck, text: "Implementación rápida" },
    { icon: FaUsers, text: "Soporte experto" },
    { icon: FaChartLine, text: "Resultados medibles" }
  ];

  return (
    <section className="bg-white min-h-screen flex items-center py-12 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Contenido de Texto - Alineado a la izquierda */}
          <div className="space-y-8 text-left">
            {/* Título principal */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-hero font-bold text-gray-900 leading-tight">
                Transforma tu Negocio con{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Tecnología
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                La solución integral que revolucionará tu forma de trabajar
              </p>
            </div>

            {/* Descripción */}
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              Más de 10,000 empresas confían en nuestra plataforma para impulsar
              su crecimiento y optimizar sus procesos con tecnología de vanguardia.
            </p>

            {/* Lista de características */}
            <div className="space-y-3">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                className="flex items-center gap-2"
              >
                <FaRocket className="w-4 h-4" />
                Comenzar Ahora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <FaPlay className="w-4 h-4" />
                Ver Demo
              </Button>
            </div>

            {/* Nota de confianza */}
            <div className="pt-4">
              <p className="text-sm text-gray-400">
                ✅ Implementación garantizada en 30 días
              </p>
            </div>
          </div>

          {/* Imagen/Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-95 transition-all duration-300">
              <div className="aspect-video rounded-xl overflow-hidden shadow-md bg-white">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
                  alt="Dashboard de analytics moderno"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Elementos flotantes de métricas */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">+45% ROI</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">10K+</div>
                  <div className="text-xs text-gray-500">Empresas</div>
                </div>
              </div>
            </div>

            {/* Elementos decorativos sutiles */}
            <div className="absolute -z-10 top-8 -right-8 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -z-10 bottom-8 -left-8 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;