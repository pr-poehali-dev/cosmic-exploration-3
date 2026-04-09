import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Contacts() {
  return (
    <section className="py-20 bg-gray-900 text-white" id="contacts">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left: info */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl font-extrabold font-heading lg:text-4xl">
                Свяжитесь с нами
              </h2>
              <p className="mt-4 text-gray-400 lg:text-lg">
                Бесплатная консультация и выезд геолога на участок. Ответим в течение 15 минут.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <a href="tel:+74951234567" className="flex items-center gap-4 hover:text-indigo-400 transition-colors">
                <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-600">
                  <Icon name="Phone" size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Телефон</p>
                  <p className="font-semibold text-lg">+7 (495) 123-45-67</p>
                </div>
              </a>

              <a href="mailto:info@akvabur.ru" className="flex items-center gap-4 hover:text-indigo-400 transition-colors">
                <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-600">
                  <Icon name="Mail" size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="font-semibold text-lg">info@akvabur.ru</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-600">
                  <Icon name="MapPin" size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Зона работ</p>
                  <p className="font-semibold text-lg">Вся Московская область</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-600">
                  <Icon name="Clock" size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Режим работы</p>
                  <p className="font-semibold text-lg">Пн–Вс, 8:00 — 20:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="rounded-2xl bg-white p-8 shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Оставить заявку</h3>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Иван Петров"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Район Московской области</label>
                <input
                  type="text"
                  placeholder="Например: Истра, Одинцово..."
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <Button size="lg" className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                Отправить заявку
              </Button>
              <p className="text-center text-xs text-gray-400">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
