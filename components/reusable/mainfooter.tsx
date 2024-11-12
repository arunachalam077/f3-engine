import Link from "next/link"
import { Facebook, Twitter, Youtube } from "lucide-react"

export default function Footer2() {
  return (
    <footer className="w-full border-t">
      <div className="container px-4 py-8 md:py-12">
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">Follow us</h2>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Blogger</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19.2,4H4.8C3.8,4,3,4.8,3,5.8v12.4c0,1,0.8,1.8,1.8,1.8h14.4c1,0,1.8-0.8,1.8-1.8V5.8C21,4.8,20.2,4,19.2,4z M8,13.5v-3 C8,9.7,8.7,9,9.5,9h5C15.3,9,16,9.7,16,10.5v3c0,0.8-0.7,1.5-1.5,1.5h-5C8.7,15,8,14.3,8,13.5z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">YouTube</span>
              <Youtube className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-4">About Google For Retail</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Overview</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">How It Works</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Goals</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Build Online Presence</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Drive Online Sales</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Drive Offline Sales</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Learning and Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Your Guide To Merchant Center</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Your Guide To Google Ads</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Google Advertiser Community</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Google Ads Help Centre</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Think with Google</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Small Business Advisors</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Related Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Manufacturer Center</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Google Ads</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Google Business Profile</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Google Analytics</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Google Pay</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link href="#" className="font-medium">Google</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">About Google</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">Google products</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">Privacy</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">Terms</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">Help</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">English - India</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}