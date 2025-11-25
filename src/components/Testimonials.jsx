function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "CEO de StartupXYZ",
      text: "Esta herramienta transformó completamente nuestra forma de trabajar. Ahorramos más de 20 horas semanales y nuestra productividad aumentó un 45%.",
      avatar: "https://images.unsplash.com/photo-1592621385612-4d7129426394?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      role: "Director de Marketing",
      text: "La mejor inversión que hemos hecho. El ROI fue visible desde el primer mes y nuestro equipo de marketing duplicó su eficiencia.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Gerente de Operaciones",
      text: "Soporte excepcional y una plataforma intuitiva. Nuestro equipo lo adoptó inmediatamente sin necesidad de entrenamiento extensivo.",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 4
    }
  ];

  // Componente para estrellas de rating
  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i}
            className={`text-lg ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        
        {/* Header Mejorado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empresas que han transformado sus operaciones con nuestras soluciones
          </p>
        </div>
        
        {/* Grid de Testimonios Mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card Principal */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col">
                
                {/* Comillas Decorativas */}
                <div className="text-6xl text-blue-100 leading-none mb-4">
                  "
                </div>
                
                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                
                {/* Texto del Testimonio */}
                <p className="text-gray-700 mb-6 leading-relaxed text-lg flex-grow">
                  {testimonial.text}
                </p>
                
                {/* Información del Autor */}
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-auto">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback si la imagen no carga */}
                    <div 
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg hidden"
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="font-bold text-gray-800 text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                  
                  {/* Icono de comillas pequeñas */}
                  <div className="text-2xl text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    "
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Métricas de Confianza */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600 text-sm">Rating Promedio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600 text-sm">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Tasa de Retención</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Soporte Disponible</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Leer más testimonios
          </button>
        </div>
        
      </div>
    </section>
  );
}

export default Testimonials;