import { MdOutlineElectricBolt } from "react-icons/md";
import { TiLockClosed } from "react-icons/ti";
import { RiCellphoneFill } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
import { AiFillSetting, AiFillFormatPainter } from "react-icons/ai";
function Features() {
  const features = [
    {
      icon: <MdOutlineElectricBolt/>,
      title: "Velocidad Increíble",
      description: "Optimizado para cargar en milisegundos"
    },
    {
      icon: <TiLockClosed/>,
      title: "Seguridad Total",
      description: "Protección de datos de nivel empresarial"
    },
    {
      icon: <RiCellphoneFill />,
      title: "100% Responsive",
      description: "Funciona perfectamente en todos los dispositivos"
    },
    {
      icon: <AiFillFormatPainter/>,
      title: "Diseño Moderno",
      description: "Interfaz intuitiva y atractiva"
    },
    {
      icon: <AiFillSetting />,
      title: "Fácil Integración",
      description: "Compatible con tus herramientas favoritas"
    },
    {
      icon: <IoStatsChart />,
      title: "Analytics Avanzado",
      description: "Métricas en tiempo real de tu negocio"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Título de Sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Características Principales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para llevar tu negocio al siguiente nivel
          </p>
        </div>
        
        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 group hover:-translate-y-2"
            >
              {/* Icono */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              
              {/* Título */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              
              {/* Descripción */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Indicador decorativo */}
             <div className="mt-6 h-1 w-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Features;