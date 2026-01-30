/**
 * Design Philosophy: Neo-Corporate with Editorial Sensibility
 * - Magazine-style layouts with editorial hierarchy
 * - Refined color blocking with brand colors
 * - Gold accent bars and rounded corners
 * - Smooth transitions and polished interactions
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Compass,
  Layers,
  Wrench,
  ShieldCheck,
  Power,
  Navigation,
  RefreshCw,
  Puzzle,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const differentiators = [
    {
      icon: Compass,
      title: "Customer-Side Focus",
      description:
        "We sit on your side of the table—aligned with your outcomes, your team, and your long-term ownership goals. Independent perspective without competing agendas.",
    },
    {
      icon: Layers,
      title: "Deep Workday Experience",
      description:
        "13+ years leading Workday programs across commercial, healthcare, financial services, and public sector. We know where implementations go sideways—and how to keep them on track.",
    },
    {
      icon: Wrench,
      title: "Hands-On, Not Deckware",
      description:
        "We join your governance, your steering meetings, your cutover war rooms. Real delivery support, not PowerPoint consulting.",
    },
    {
      icon: ShieldCheck,
      title: "People-First Projects",
      description:
        "Great systems need people who can sustain them. We protect team capacity, build internal capability, and design for ownership—not dependency.",
    },
  ];

  const stages = [
    {
      icon: Power,
      title: "Activate",
      tagline: "Set the delivery engine before work accelerates.",
      description:
        "Align outcomes, scope, governance, roles, and partner expectations so your team starts steady.",
      href: "/services/activate",
    },
    {
      icon: Navigation,
      title: "Deliver",
      tagline: "Customer-side execution strength during implementation.",
      description:
        "Strengthen the customer-side delivery engine with partner-agnostic advisory, delivery assurance, and embedded leadership.",
      href: "/services/deliver",
    },
    {
      icon: RefreshCw,
      title: "Run & Evolve",
      tagline: "Sustained post-go-live value at a manageable pace.",
      description:
        "Stabilize, improve, and keep Workday delivering value without burning out your team.",
      href: "/services/run-evolve",
    },
    {
      icon: Puzzle,
      title: "Specialty Services",
      tagline: "Focused support for complex, cross-cutting situations.",
      description:
        "Customer-side delivery discipline for M&A, AI readiness, and ERP program management.",
      href: "/services/specialty",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img
              src="/images/hero-bg.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
                Workday Expertise,{" "}
                <span className="text-accent">On Your Side</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
                Customer-side advisory and leadership across the full Workday
                lifecycle—less stress, more value, and a team ready to own the
                platform.
              </p>
              <ul className="space-y-3 mb-10 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Start strong with clear scope, the right SI, and a solid
                    foundation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Stay on track with delivery assurance and embedded
                    leadership
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Stabilize, optimize, and keep value flowing post-go-live
                  </span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 text-base"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base"
                  >
                    Start a Conversation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiator Cards */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
            <img
              src="/images/services-abstract.png"
              alt=""
              className="w-[800px] h-[800px] object-contain"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Services Built Around Your Journey
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Workday programs move through distinct stages—and so do the
                challenges. We've organized our services around the customer
                lifecycle so you can find the right support for where you are
                now.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <Link key={index} href={stage.href}>
                    <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-2">
                            {stage.title}
                          </h3>
                          <p className="text-accent text-sm font-medium">
                            {stage.tagline}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {stage.description}
                      </p>
                      <div className="mt-6 flex items-center text-primary font-medium">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Teaser */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10">
            <img
              src="/images/about-leadership.png"
              alt=""
              className="w-[600px] h-[400px] object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="accent-bar">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Led by Delivery Experience
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Lightning Point Consulting is led by Jeff Tummon, a Workday
                  delivery leader with 13+ years in the ecosystem. Former Head
                  of Professional Services (Canada) at Workday and Certified
                  Engagement Manager, Jeff brings clarity, discipline, and a
                  sense of calm to complex programs.
                </p>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Let's Talk
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Whether you're early in planning, mid-implementation, or
                stabilizing post-go-live—we're happy to explore how we can help.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
