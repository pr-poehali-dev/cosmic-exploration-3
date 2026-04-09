import { Navbar } from "@/components/Navbar"
import { Hero7 } from "@/components/Hero7"

const Index = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/projects/8db681c8-eb09-4196-a236-77c804891a7b/files/9299c6b1-0273-4764-b714-1d26f97b5a87.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, rgba(255,255,255,0.92) 40%, rgba(99,102,241,0.85) 100%)",
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
              { src: "https://cdn.poehali.dev/projects/8db681c8-eb09-4196-a236-77c804891a7b/files/4f506dae-d11b-4720-8a8a-316ec25d556b.jpg", alt: "Бурильщик 1" },
              { src: "https://cdn.poehali.dev/projects/8db681c8-eb09-4196-a236-77c804891a7b/files/185592b7-350e-4395-a300-8689ae079750.jpg", alt: "Бурильщик 2" },
              { src: "https://cdn.poehali.dev/projects/8db681c8-eb09-4196-a236-77c804891a7b/files/10aaef1c-9955-4d30-a75b-b39034e082af.jpg", alt: "Бурильщик 3" },
              { src: "https://cdn.poehali.dev/projects/8db681c8-eb09-4196-a236-77c804891a7b/files/3a52a7d5-4dfd-448e-922f-158f107f0706.jpg", alt: "Бурильщик 4" },
              { src: "https://cdn.poehali.dev/projects/8db681c8-eb09-4196-a236-77c804891a7b/files/df6d78ea-b10a-40eb-8c74-3a2b20ffb702.jpg", alt: "Бурильщик 5" },
            ]}}
          />
        </main>
      </div>
    </div>
  )
}

export default Index