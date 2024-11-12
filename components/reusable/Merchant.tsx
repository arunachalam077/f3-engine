"use client"

import { BarChart3, CheckCircle, FileText, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function Merchant() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1 
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How to get started with Google Merchant Center
      </motion.h1>
      
      <motion.div 
        className="space-y-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div 
          className="flex items-start gap-6"
          variants={item}
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6 text-amber-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Add your products and business across Google for free
            </h2>
            <p className="text-muted-foreground">
              Get started by creating a free Merchant Center account and providing information about your business and products. If you're on an e-commerce platform, you can automatically sync your products.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-start gap-6"
          variants={item}
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Customers click to purchase your products
            </h2>
            <p className="text-muted-foreground">
              Your business and products can appear on Google Search, Maps and more, when users search on Google for products that you offer. Once a customer clicks, you can direct them to your online shop or a physical location to complete their purchase.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-start gap-6"
          variants={item}
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-red-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Grow your business with personalised insights
            </h2>
            <p className="text-muted-foreground">
              We'll provide actionable insights in Merchant Center about how customers interact with your business and products so that you can drive more traffic to your site or local shop.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-start gap-6"
          variants={item}
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <BarChart3 className="w-6 h-6 text-blue-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Drive sales with paid advertising
            </h2>
            <p className="text-muted-foreground">
              When you're ready, you can promote your products with Google Ads to reach more customers and drive sales. Stay in full control of your budget and only pay when customers engage with your ad.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}