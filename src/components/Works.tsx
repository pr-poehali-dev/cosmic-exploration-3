import { motion } from "framer-motion"

const works = [
  {
    img: "https://cdn.poehali.dev/projects/8db681c8-eb09-4196-a236-77c804891a7b/files/c29ee231-1adf-4dc1-bd94-8fa429bf6bfd.jpg",
    title: "Скважина 68 м, Истринский район",
    desc: "Участок под ИЖС. Дебит 3 м³/ч, вода питьевого качества.",
  },
  {
    img: "https://cdn.poehali.dev/projects/8db681c8-eb09-4196-a236-77c804891a7b/files/e5bf66e6-8d20-4e68-b95c-09fcf8404be9.jpg",
    title: "Скважина 54 м, Одинцовский район",
    desc: "Дача 20 соток. Насос Grundfos, автоматическая станция.",
  },
  {
    img: "https://cdn.poehali.dev/projects/8db681c8-eb09-4196-a236-77c804891a7b/files/dab558e6-6fcf-4634-90dc-3f544a1ce15d.jpg",
    title: "Скважина 82 м, Солнечногорск",
    desc: "Коттедж 400 м². Артезианская вода, система фильтрации.",
  },
  {
    img: "https://cdn.poehali.dev/projects/8db681c8-eb09-4196-a236-77c804891a7b/files/0c372fa2-6dab-4989-9819-f1e83743e97f.jpg",
    title: "Насосная станция, Серпухов",
    desc: "Монтаж водоподготовки под ключ: насос, гидроаккумулятор, фильтры.",
  },
]

export function Works() {
  return (
    <section className="py-20 bg-gray-50" id="works">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold font-heading text-gray-900 lg:text-4xl">
            Выполненные работы
          </h2>
          <p className="mt-4 text-muted-foreground lg:text-lg">
            Реальные объекты наших клиентов по всей Московской области
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {works.map((w, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={w.img}
                  alt={w.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm">{w.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
