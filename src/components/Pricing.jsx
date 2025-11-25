function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "$29",
      period: "/mes",
      features: [
        "5 Usuarios",
        "50 GB Almacenamiento",
        "Soporte por Email",
        "Actualizaciones Mensuales"
      ],
      popular: false
    },
    {
      name: "Profesional",
      price: "$79",
      period: "/mes",
      features: [
        "20 Usuarios",
        "500 GB Almacenamiento",
        "Soporte 24/7",
        "Actualizaciones Semanales",
        "Analytics Avanzado",
        "API Access"
      ],
      popular: true
    },
    {
      name: "Empresarial",
      price: "$199",
      period: "/mes",
      features: [
        "Usuarios Ilimitados",
        "2 TB Almacenamiento",
        "Soporte Premium",
        "Actualizaciones Diarias",
        "Analytics + IA",
        "API Prioritario",
        "Manager Dedicado"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planes para Cada Necesidad
          </h2>
          <p className="text-xl text-gray-400">
            Elige el plan perfecto para tu equipo
          </p>
        </div>

        {/* Cards de Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${plan.popular
                  ? 'bg-gradient-to-br from-primary-600 to-secondary-600 transform scale-105 shadow-2xl'
                  : 'bg-gray-800'
                }`}
            >
              {/* Badge Popular */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    Más Popular
                  </span>
                </div>
              )}

              {/* Nombre del Plan */}
              <h3 className="text-2xl font-bold mb-4">
                {plan.name}
              </h3>

              {/* Precio */}
              <div className="mb-6">
                <span className="text-5xl font-extrabold">
                  {plan.price}
                </span>
                <span className="text-gray-400">
                  {plan.period}
                </span>
              </div>

              {/* Características */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-400 text-xl shrink-0">
                      ✓
                    </span>
                    <span className={plan.popular ? 'text-white' : 'text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botón */}
              <button className={`
                w-full py-4 rounded-lg font-bold text-lg transition-all
                ${plan.popular
                  ? 'bg-white text-purple-600 hover:bg-gray-100'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                }
              `}>
                Elegir Plan
              </button>
            </div>
          ))}
        </div>

        {/* Nota de pie */}
        <p className="text-center text-gray-400 mt-12">
          Todos los planes incluyen 14 días de prueba gratis. Sin tarjeta de crédito requerida.
        </p>

      </div>
    </section>
  );
}

export default Pricing;