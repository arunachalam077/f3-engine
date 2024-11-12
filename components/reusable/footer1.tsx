import { Button } from "@/components/ui/button"

export default function Footer1() {
  return (
    <section className="w-full px-4 py-16 md:py-24 lg:py-32 bg-blue-50">
      <div className="container mx-auto max-w-[900px] text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8 text-gray-900">
          Reach millions of customers on Google for free with Merchant Center
        </h1>
        <Button
          size="lg"
          variant="default"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-2 text-base font-medium"
        >
          Start now
        </Button>
      </div>
    </section>
  )
}