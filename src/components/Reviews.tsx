import { motion } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Андрей Кузнецов",
    location: "Истринский район",
    text: "Пробурили скважину за 4 дня. Вода отличная, анализ показал питьевое качество без доп. фильтрации. Бригада аккуратная, участок убрали после себя.",
    rating: 5,
    avatar: "АК",
  },
  {
    name: "Елена Соколова",
    location: "Одинцово",
    text: "Обращались уже второй раз — сначала для дачи, теперь для дома. Всё чётко: приехали вовремя, цена не изменилась, насос работает без сбоев уже 2 года.",
    rating: 5,
    avatar: "ЕС",
  },
  {
    name: "Михаил Петров",
    location: "Серпухов",
    text: "Сравнивал 3 компании. АкваБур МО дал самую подробную консультацию и фиксированную цену. Итог — скважина 76 м, дебит 4 м³/ч. Рекомендую.",
    rating: 5,
    avatar: "МП",
  },
  {
    name: "Ольга Васильева",
    location: "Солнечногорск",
    text: "Подключили водоподготовку под ключ. Ребята знают своё дело: правильно подобрали фильтры под анализ воды. Очень довольна результатом.",
    rating: 5,
    avatar: "ОВ",
  },
  {
    name: "Дмитрий Николаев",
    location: "Красногорск",
    text: "Сделали скважину на участке со сложным грунтом (плывун). Справились профессионально, предупредили заранее о сложности. Цена не выросла.",
    rating: 5,
    avatar: "ДН",
  },
  {
    name: "Татьяна Иванова",
    location: "Раменское",
    text: "Приятно удивил сервис после сдачи объекта: через неделю позвонили, уточнили всё ли в порядке. Скважина работает отлично, вода вкусная.",
    rating: 5,
    avatar: "ТИ",
  },
]

export function Reviews() {
  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold font-heading text-gray-900 lg:text-4xl">
            Отзывы клиентов
          </h2>
          <p className="mt-4 text-muted-foreground lg:text-lg">
            320+ довольных клиентов по всему Подмосковью
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-sm">
                  {r.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.location}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="size-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
