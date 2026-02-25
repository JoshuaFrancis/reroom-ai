export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-extrabold">
              <span className="text-primary">Room</span>
              <span className="text-white">Lab</span>
            </a>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              AI-powered room redesign for homeowners, designers, and real estate
              professionals.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#examples"
                  className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                >
                  Examples
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/terms#4-5-refunds"
                  className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} RoomLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
