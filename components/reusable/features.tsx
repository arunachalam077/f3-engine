'use client'

import { useState, useEffect } from 'react'
import { Search, Map, Youtube, ShoppingBag, Image as ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export default function Features() {
  const [activeButton, setActiveButton] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveButton((prev) => (prev + 1) % 5)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const navigationButtons = [
    { icon: Search, label: 'Search' },
    { icon: Map, label: 'Maps' },
    { icon: Youtube, label: 'YouTube' },
    { icon: ShoppingBag, label: 'Shopping' },
    { icon: ImageIcon, label: 'Images' },
  ]

  const mobileViews = [
    // Search View
    (
      <div className="p-4 bg-white h-full">
        <img src="/placeholder.svg?height=40&width=120" alt="Google Logo" className="h-10 mb-4" />
        <div className="border rounded-full p-3 mb-4 flex items-center gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">Running shoes</span>
        </div>
        <div className="flex gap-2 text-sm mb-4 overflow-x-auto">
          {['All', 'Images', 'Maps', 'Shopping', 'Videos', 'News'].map((tab) => (
            <span key={tab} className="whitespace-nowrap px-3 py-1 rounded-full bg-gray-100">
              {tab}
            </span>
          ))}
        </div>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-50 p-3 rounded-lg">
              <h3 className="font-medium">Running Shoe Store {i + 1}</h3>
              <p className="text-sm text-gray-600">High-quality running shoes for all types of runners</p>
            </div>
          ))}
        </div>
      </div>
    ),
    // Images View
    (
      <div className="p-4 bg-white h-full">
        <img src="/placeholder.svg?height=40&width=120" alt="Google Logo" className="h-10 mb-4" />
        <div className="border rounded-full p-3 mb-4 flex items-center gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">Running shoes</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={`/placeholder.svg?height=100&width=100&text=Shoe${i+1}`}
                alt={`Running shoe ${i+1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    ),
    // Maps View
    (
      <div className="p-4 bg-white h-full flex flex-col">
        <img src="/placeholder.svg?height=40&width=120" alt="Google Logo" className="h-10 mb-4" />
        <div className="border rounded-full p-3 mb-4 flex items-center gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">Running shoes near me</span>
        </div>
        <div className="flex-grow bg-gray-200 rounded-lg mb-4 relative overflow-hidden">
          <img
            src="/placeholder.svg?height=200&width=300&text=Map"
            alt="Map"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Map className="w-12 h-12 text-primary" />
          </div>
        </div>
        <div className="space-y-2">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-gray-50 p-2 rounded-lg flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Map className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Running Shoe Store {i + 1}</h3>
                <p className="text-xs text-gray-600">123 Main St, City</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    // Shopping View
    (
      <div className="p-4 bg-white h-full">
        <img src="/placeholder.svg?height=40&width=120" alt="Google Logo" className="h-10 mb-4" />
        <div className="border rounded-full p-3 mb-4 flex items-center gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">Buy running shoes</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-[#FFF8E1] rounded-lg p-2">
              <div className="bg-white rounded-lg p-2 mb-2">
                <img
                  src={`/placeholder.svg?height=100&width=100&text=Shoe${i+1}`}
                  alt={`Running shoe ${i+1}`}
                  className="w-full aspect-square object-cover rounded"
                />
              </div>
              <div className="text-xs">
                <div className="font-medium">Running shoes</div>
                <div className="text-gray-600">₹{(i + 6) * 1000}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    // YouTube View
    (
      <div className="p-4 bg-white h-full">
        <img src="/placeholder.svg?height=40&width=120" alt="YouTube Logo" className="h-10 mb-4" />
        <div className="border rounded-full p-3 mb-4 flex items-center gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">Running shoe reviews</span>
        </div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 relative">
                <img
                  src={`/placeholder.svg?height=180&width=320&text=Video${i+1}`}
                  alt={`Running shoe review ${i+1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Youtube className="w-12 h-12 text-red-500" />
                </div>
              </div>
              <div className="p-2">
                <h3 className="font-medium text-sm">Best Running Shoes of 2023 - Review {i + 1}</h3>
                <p className="text-xs text-gray-600">1M views • 2 days ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  ]

  return (
    <div className="min-h-screen bg-white p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-center mb-16 leading-tight">
          Your products and business can show up across Google for free
        </h1>
        
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Navigation */}
          <div className="space-y-4">
            {navigationButtons.map((btn, index) => (
              <Button
                key={btn.label}
                variant="outline"
                className={cn(
                  "w-full justify-start text-lg gap-3 py-6 transition-all duration-300",
                  activeButton === index && "bg-primary/5 scale-105"
                )}
              >
                <btn.icon className="w-5 h-5" />
                {btn.label}
              </Button>
            ))}
          </div>

          {/* Center Phone Mockup */}
          <div className="relative mx-auto w-full max-w-[300px] aspect-[9/16] bg-white rounded-3xl shadow-2xl p-3">
            <div className="w-full h-full rounded-2xl border overflow-hidden">
              {mobileViews[activeButton]}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:pl-8">
            <h2 className="text-3xl lg:text-4xl font-normal mb-4">
              Be seen on Google {navigationButtons[activeButton].label}
            </h2>
            <p className="text-gray-600 text-lg">
              Your products and business can appear when customers search for offerings like yours on Google {navigationButtons[activeButton].label}.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}