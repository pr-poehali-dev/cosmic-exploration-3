import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Contacts() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [district, setDistrict] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("https://functions.poehali.dev/caaf2809-1461-4727-8ca0-b5fc2ea8d68d", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, district }),
      })
      if (res.ok) {
        setStatus("success")
        setName("")
        setPhone("")
        setDistrict("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

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

              <a href="mailto:ekamyshov@yandex.ru" className="flex items-center gap-4 hover:text-indigo-400 transition-colors">
                <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-600">
                  <Icon name="Mail" size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="font-semibold text-lg">ekamyshov@yandex.ru</p>
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

            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-green-100">
                  <Icon name="CheckCircle" size={32} className="text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Заявка отправлена!</h4>
                <p className="text-sm text-gray-500">Мы свяжемся с вами в течение 15 минут.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Петров"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Район Московской области</label>
                  <input
                    type="text"
                    placeholder="Например: Истра, Одинцово..."
                    value={district}
                    onChange={e => setDistrict(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-red-500">Ошибка отправки. Попробуйте ещё раз или позвоните нам.</p>
                )}
                <Button
                  size="lg"
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  {status === "loading" ? "Отправляем..." : "Отправить заявку"}
                </Button>
                <p className="text-center text-xs text-gray-400">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
