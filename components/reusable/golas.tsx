"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const MotionLink = motion(Link)

export default function Goals() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="py-16 px-4 md:py-24 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#202124]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Reach your business goals
        </motion.h1>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Build Online Presence */}
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative mb-8 w-48 h-48">
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="Online presence illustration"
                width={192}
                height={192}
                className="object-cover rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-[#202124]">Build an online presence</h2>
            <p className="text-[#5f6368] mb-6">
              Connect with more customers and increase online engagement by adding your products and business to Google for free.
            </p>
            <MotionLink 
              href="#" 
              className="text-[#1a73e8] hover:underline mt-auto font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more
            </MotionLink>
          </motion.div>

          {/* Drive Online Sales */}
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <div className="relative mb-8 w-48 h-48 bg-[#e8f0fe] rounded-lg p-4">
              <div className="absolute top-2 right-2 text-xs bg-white px-2 py-1 rounded text-[#1a73e8]">
                Sponsored
              </div>
              <Image
                src="/placeholder.svg?height=176&width=176"
                alt="Online sales illustration"
                width={176}
                height={176}
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-[#202124]">Drive online sales</h2>
            <p className="text-[#5f6368] mb-6">
              Boost your conversions with Google Ad campaigns like Performance Max that give your products premium advertising placements.
            </p>
            <MotionLink 
              href="#" 
              className="text-[#1a73e8] hover:underline mt-auto font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more
            </MotionLink>
          </motion.div>

          {/* Drive Offline Sales */}
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <div className="relative mb-8 w-48 h-48">
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="Offline sales illustration"
                width={192}
                height={192}
                className="object-cover rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-[#202124]">Drive offline sales</h2>
            <p className="text-[#5f6368] mb-6">
              Get more traffic to your physical shop with advertising that showcases your in-store inventory.
            </p>
            <MotionLink 
              href="#" 
              className="text-[#1a73e8] hover:underline mt-auto font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more
            </MotionLink>
          </motion.div>
        </div>
      </div>
    </section>
  )
}