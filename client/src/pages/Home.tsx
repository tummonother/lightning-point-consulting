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
  Settings,
  Shield,
  Activity,
  Users,
  Briefcase,
  TrendingUp,
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
        "13+ years leading Workday programs across commercial, healthcare, financial services, and public sector. Former Head of Professional Services (Canada) at Workday. We bring pattern recognition from dozens of deployments to help your program succeed.",
    },
    {
      icon: Wrench,
      title: "Hands-On, not Handed-Off",
      description:
        "We join your governance, your steering meetings, your cutover war rooms. Real delivery support that strengthens your partner relationship.",
    },
    {
      icon: ShieldCheck,
      title: "People-First Projects",
      description:
        "Great systems need people who can sustain them. We protect team capacity, build internal capability, and design for ownership—not dependency.",
    },
  ];

  const services = [
    {
      icon: Settings,
      title: "Activation & Setup",
      slug: "activation-&-setup",
      description:
        "Start your program with clear scope, governance, and partner alignment. Independent guidance before implementation begins.",
    },
    {
      icon: Shield,
      title: "Delivery Assurance",
      slug: "delivery-assurance",
      description:
        "Keep delivery predictable with milestone reviews and sponsor-ready guidance. Your customer-side confidence layer during implementation.",
    },
    {
      icon: Activity,
      title: "Health Check & Course Correction",
      slug: "health-check-&-course-correction",
      description:
        "Get a clear diagnosis and credible reset plan—fast. Objective assessment when the project feels off.",
    },
    {
      icon: Users,
      title: "Embedded Leadership",
      slug: "embedded-leadership",
      description:
        "Customer-side leadership that runs cadence and drives readiness. Experienced delivery leaders directly in your team.",
    },
    {
      icon: Briefcase,
      title: "Expert Bench",
      slug: "expert-bench",
      description:
        "Premium Workday capacity—vetted, matched, and ready. Access to our curated network of experienced consultants.",
    },
    {
      icon: TrendingUp,
      title: "Optimize & Operate",
      slug: "optimize-&-operate",
      description:
        "Stabilize, optimize, and keep Workday value flowing after go-live. Sustainable improvement without burning out your team.",
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
                Customer-Side Delivery Assurance for{" "}
                <span className="text-accent">High-Stakes Workday Programs</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
                Founder-led, partner-aligned advisory and delivery leadership for
                enterprise Workday implementations. Real status, faster decisions,
                and a team ready to own the platform long-term.
              </p>
              <ul className="space-y-3 mb-10 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Former Head of Workday Professional Services (Canada) with 13+ years of delivery leadership
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Experience across healthcare, financial services, public sector, and commercial deployments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Partner-aligned approach that strengthens your SI relationship and builds internal ownership
                  </span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services#our-services">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 text-base"
                  >
                    See How We Help
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base"
                  >
                    Book a Discovery Call
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
                Services Built for the Full Workday Lifecycle
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Independent advisory and execution support across every stage of
                your Workday journey—from pre-implementation readiness through
                post-go-live optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link key={index} href={`/services#${service.slug}`}>
                  <div
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
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
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Teaser */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/images/about-leadership.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                    13 Years of Workday Delivery Leadership
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Lightning Point Consulting is led by Jeff Tummon, former
                    Head of Workday Professional Services (Canada), with 13+
                    years leading Workday deployments across industries.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    We've lived this from every angle—SI side, customer side,
                    and as Workday project sponsors. We know what good delivery
                    looks like because we've built it.
                  </p>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      Learn More About Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="bg-card border border-border rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    We believe great Workday programs are built on three
                    principles: calm delivery rhythms, clear decision paths, and
                    teams that own the platform long-term.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-muted-foreground">
                        Protect team capacity and build internal capability
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-muted-foreground">
                        Design for ownership, not dependency
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-muted-foreground">
                        Real delivery support, not PowerPoint consulting
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url(/images/contact-pattern.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Let's See If We Can Help
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Whether you're planning a new implementation, navigating a
                challenging delivery, or looking to optimize post-go-live—let's
                have a conversation about what might move the needle.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Book a Discovery Call
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
