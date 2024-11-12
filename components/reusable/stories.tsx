'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Youtube } from "lucide-react"
import Image from "next/image"

export default function Stories() {
  const testimonials = [
    {
      stat: "58%",
      statLabel: "increase in revenue",
      image: "/placeholder.svg?height=600&width=800",
      logo: "/placeholder.svg?height=100&width=100",
      quote: "Performance Max has allowed us to reach more customers in a way that we were never able to do before.",
      author: "Kate Barrows, VP of Growth, Rothy's"
    },
    {
      stat: "3.5x",
      statLabel: "return on ad spend",
      image: "/placeholder.svg?height=600&width=800",
      logo: "/placeholder.svg?height=100&width=100",
      quote: "Our digital marketing strategy has completely transformed with these new tools.",
      author: "Michael Chen, Marketing Director"
    },
    {
      stat: "2M+",
      statLabel: "new customers reached",
      image: "/placeholder.svg?height=600&width=800",
      logo: "/placeholder.svg?height=100&width=100",
      quote: "The ability to reach new audiences has exponentially grown our customer base.",
      author: "Sarah Johnson, CEO"
    }
  ]

  return (
    <div className="bg-[#F0F3FF] py-16 px-4 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What success looks like
        </h1>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 bg-transparent shadow-none">
                  <CardContent className="grid md:grid-cols-2 gap-8 p-0">
                    <div className="relative rounded-lg overflow-hidden">
                      <div className="absolute top-8 left-8 bg-white rounded-lg p-4 z-10">
                        <div className="text-[#0D8A3E] text-4xl font-bold flex items-center gap-2">
                          {testimonial.stat}
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              d="M12 19V5M12 5l7 7M12 5l-7 7"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="text-gray-600">{testimonial.statLabel}</div>
                      </div>
                      <Image
                        src={testimonial.image}
                        alt="Success story"
                        width={800}
                        height={600}
                        className="object-cover w-full h-[500px]"
                      />
                    </div>
                    <div className="flex flex-col justify-center bg-white rounded-lg p-8">
                      <Image
                        src={testimonial.logo}
                        alt="Company logo"
                        width={64}
                        height={64}
                        className="mb-8"
                      />
                      <blockquote className="text-2xl font-medium mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <cite className="text-gray-600 not-italic mb-8">
                        {testimonial.author}
                      </cite>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 w-fit bg-blue-600 text-white"
                      >
                        <Youtube className="w-5 h-5" />
                        Watch their story
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  )
}