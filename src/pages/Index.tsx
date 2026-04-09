import { Navbar } from "@/components/Navbar"
import { Hero7 } from "@/components/Hero7"

const Index = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="lg:mx-12">
          <Hero7
            heading="Бурение водяных скважин в Московской области"
            description="Собственная вода на вашем участке за 3–5 дней. Бурим под ключ: от геологии до подключения насоса. Гарантия 5 лет на все работы."
            button={{ text: "Рассчитать стоимость", url: "#" }}
            reviews={{ count: 320, rating: 4.9, avatars: [
              { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp", alt: "Клиент 1" },
              { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp", alt: "Клиент 2" },
              { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp", alt: "Клиент 3" },
              { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp", alt: "Клиент 4" },
              { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp", alt: "Клиент 5" },
            ]}}
          />
        </main>
      </div>
    </div>
  )
}

export default Index