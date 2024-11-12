'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Herosection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const platforms = [
    {
      name: "YouTube",
      color: "text-red-600",
      image: "/placeholder.svg?height=600&width=300",
      bgColor: "from-red-100/80 to-red-50/50"
    },
    {
      name: "Google Shopping",
      color: "text-blue-500",
      image: "/placeholder.svg?height=600&width=300",
      bgColor: "from-blue-100/80 to-blue-50/50"
    },
    {
      name: "Google Images",
      color: "text-orange-500",
      image: "/placeholder.svg?height=600&width=300",
      bgColor: "from-orange-100/80 to-orange-50/50"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % platforms.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full min-h-[80vh] flex items-center py-12 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Drive sales and reach more customers on{" "}
                <span
                  className={`transition-colors duration-200 ${platforms[currentIndex].color}`}
                >
                  {platforms[currentIndex].name}.
                </span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Easily manage and promote your business and products to millions of shoppers across Google with Merchant Center.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full">
                Start now
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            {/* Background Circle */}
            <div 
              className={`absolute w-[800px] h-[800px] rounded-full transition-all duration-500 bg-gradient-to-b ${platforms[currentIndex].bgColor}`}
              style={{
                transform: 'translate(-50%, -50%)',
                left: '50%',
                top: '50%',
                filter: 'blur(60px)',
                opacity: 0.8,
                zIndex: 0
              }}
            />
            {/* Phone Container with Shadow */}
            <div className="relative w-[300px] h-[600px] transition-transform duration-500 z-10">
              <div className="absolute inset-0 bg-white rounded-[40px] shadow-2xl" />
              {platforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={platform.image}
                    alt={`${platform.name} interface`}
                    width={300}
                    height={600}
                    className="object-cover rounded-[40px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}