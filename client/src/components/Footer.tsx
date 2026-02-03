/**
 * Design Philosophy: Neo-Corporate with Editorial Sensibility
 * - Dark blue background with white/gold accents
 * - Clean, organized footer with contact info and navigation
 */

import { Link } from "wouter";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div>
            <img
              src="/images/Lightning_Point_Consulting_Logo_VF_White_cropped.png"
              alt="Lightning Point Consulting"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-primary-foreground/80">
              Customer-side, partner-agnostic advisory and delivery support for
              Workday programs and ERP initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/services">
                <span className="text-sm hover:text-accent transition-colors">
                  Services
                </span>
              </Link>
              <Link href="/about">
                <span className="text-sm hover:text-accent transition-colors">
                  About
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-sm hover:text-accent transition-colors">
                  Contact
                </span>
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-accent mb-4">Contact</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:info@lightningpoint.consulting"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@lightningpoint.consulting
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/60 text-center">
            © {new Date().getFullYear()} Lightning Point Consulting Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
