function Gallery() {
  const images = [
    { 
      id: 1, 
      category: "Trabajo en Equipo",
      description: "Colaboración efectiva en entornos modernos",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661963828727-823941143490?w=600&h=750&fit=crop&auto=format",

    },
    { 
      id: 2, 
      category: "Reuniones Productivas",
      description: "Sesiones de trabajo colaborativas",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=800&fit=crop&auto=format",
    },
    { 
      id: 3, 
      category: "Liderazgo",
      description: "Dirigiendo equipos hacia el éxito",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=700&fit=crop&auto=format",
    },
    { 
      id: 4, 
      category: "Planificación",
      description: "Estrategias y planeación detallada",
      imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=750&fit=crop&auto=format",
    },
    { 
      id: 5, 
      category: "Soporte Técnico",
      description: "Atención al cliente especializada",
      imageUrl: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&h=800&fit=crop&auto=format",
    },
    { 
      id: 6, 
      category: "Innovación",
      description: "Explorando nuevas tecnologías",
      imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=700&fit=crop&auto=format",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestro Trabajo en Acción
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre cómo transformamos negocios con soluciones tecnológicas innovadoras
          </p>
        </div>
        
        {/* Masonry Grid*/}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image) => (
            <div 
              key={image.id}
              className="break-inside-avoid mb-6"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-500">
                
                {/*loading optimizado */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={image.imageUrl} 
                    alt={`${image.category} - ${image.description}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Overlay informativo en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-6">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {image.category}
                    </h3>
                    <p className="text-gray-200 mb-4 text-sm">
                      {image.description}
                    </p>
                    <button className="bg-white text-gray-900 hover:bg-gray-100 px-5 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm">
                      Ver Caso de Estudio
                    </button>
                  </div>
                </div>

                {/* Badge de categoría visible */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">
                    {image.category}
                  </span>
                </div>

                {/* Efecto de brillo sutil en hover */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action*/}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-gray-600 mb-6">
              Agenda una demostración personalizada y descubre cómo podemos ayudarte
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Solicitar Demo Gratuita
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Gallery;