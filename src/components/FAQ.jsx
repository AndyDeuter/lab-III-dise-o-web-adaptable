import { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

const faqs = [
  {
    question: '¿Cuál es la responsabilidad del estado activeIndex dentro del componente FAQ?',
    answer:
      'El estado `activeIndex` guarda el índice de la pregunta actualmente abierta; permite abrir/cerrar ítems y controlar la animación del contenido.',
  },
  {
    question: '¿Cómo funciona la apertura y cierre del acordeón?',
    answer:
      'Al hacer clic en una pregunta se actualiza `activeIndex`: si ya estaba abierta se cierra (null), si no se abre el nuevo índice y se cierra la anterior.',
  },
  {
    question: '¿Qué clases de Tailwind controlan la animación del panel?',
    answer:
      'Usamos `transition-all`, `overflow-hidden` y clases de `max-h-*` junto con `opacity-*` para animar la apertura y cierre de forma suave.',
  },

]

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Preguntas Frecuentes</h2>

        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = activeIndex === idx
            const contentId = `faq-content-${idx}`
            return (
              <div key={idx} className="rounded-lg border border-gray-200 overflow-hidden">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-left text-gray-900 font-medium">{item.question}</span>
                  <span className="ml-4 text-gray-500">
                    {isOpen ? <HiChevronUp className="w-5 h-5" /> : <HiChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                <div
                  id={contentId}
                  className={`px-4 transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="py-3 text-sm text-gray-700">
                    {item.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
