import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Clock",
    title: "Срок 3–5 дней",
    description: "Бурим быстро без простоев. Выезд бригады в течение 24 часов после заявки.",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия 5 лет",
    description: "Письменная гарантия на все виды работ. Бесплатно устраним любую неисправность.",
  },
  {
    icon: "Wrench",
    title: "Работа под ключ",
    description: "Геология, бурение, обсадка, насос, автоматика — всё в одной бригаде.",
  },
  {
    icon: "Droplets",
    title: "Анализ воды",
    description: "Проводим лабораторный анализ воды и подбираем систему фильтрации под результат.",
  },
  {
    icon: "MapPin",
    title: "Вся Московская область",
    description: "Работаем во всех районах МО. Выезд бесплатный в радиусе 100 км от МКАД.",
  },
  {
    icon: "BadgeRussianRuble",
    title: "Фиксированная цена",
    description: "Стоимость согласовывается до начала работ. Никаких доплат и скрытых расходов.",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-white" id="advantages">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold font-heading text-gray-900 lg:text-4xl">
            Почему выбирают нас
          </h2>
          <p className="mt-4 text-muted-foreground lg:text-lg max-w-2xl mx-auto">
            Более 10 лет буримим скважины в Подмосковье. За это время выполнили 1 200+ объектов.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-100">
                <Icon name={f.icon} size={24} className="text-indigo-600" fallback="Star" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
