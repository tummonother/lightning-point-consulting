/**
 * Design Philosophy: Neo-Corporate with Editorial Sensibility
 * - Interactive "Start Here" chooser to guide visitors
 * - Stage cards with clear visual hierarchy
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Power,
  Navigation,
  RefreshCw,
  Puzzle,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Services() {
  const chooserItems = [
    {
      situation: "We're early / selecting a partner / setting up",
      destination: "Activate",
      href: "/services/activate",
    },
    {
      situation: "We're implementing and need clearer decisions",
      destination: "Delivery Strategy & Advisory",
      href: "/services/deliver#advisory",
    },
    {
      situation: "We're approaching a milestone and want confidence",
      destination: "Delivery Assurance",
      href: "/services/deliver#assurance",
    },
    {
      situation: "Something feels off and we need an objective read",
      destination: "Project Health Check & Risk Assessment",
      href: "/services/deliver#diagnose",
    },
    {
      situation: "We know we need a reset plan",
      destination: "Course Correction & Recovery Planning",
      href: "/services/deliver#reset",
    },
    {
      situation: "We're short on leadership capacity",
      destination: "Program Leadership",
      href: "/services/deliver#lead",
    },
    {
      situation: "Adoption/readiness is the risk",
      destination: "Change & Organizational Readiness",
      href: "/services/deliver#change",
    },
    {
      situation: "We need expert capacity fast",
      destination: "Extended Team Support",
      href: "/services/deliver#scale",
    },
    {
      situation: "We're live and want steady improvements",
      destination: "Run & Evolve",
      href: "/services/run-evolve",
    },
    {
      situation: "We have a special situation (M&A / AI / ERP)",
      destination: "Specialty Services",
      href: "/services/specialty",
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
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                Services Built Around Your Journey
              </h1>
              <p className="text-xl leading-relaxed text-primary-foreground/90">
                Workday programs move through distinct stages—and so do the
                challenges. We've organized our services around the customer
                lifecycle so you can find the right support for where you are
                now, with clear pathways as needs evolve.
              </p>
              <p className="text-lg mt-4 text-accent">
                Customer-side. Partner-agnostic. Designed for less stress, more
                value, and a team ready to own the platform.
              </p>
            </div>
          </div>
        </section>

        {/* Start Here Chooser */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Start Here: Find Your Service
              </h2>
              <div className="bg-card border border-border rounded-xl p-8">
                <Accordion type="single" collapsible className="w-full">
                  {chooserItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:text-accent">
                        {item.situation}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-2 pb-4">
                          <Link href={item.href}>
                            <Button
                              variant="outline"
                              className="w-full justify-between"
                            >
                              <span>Go to: {item.destination}</span>
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Stage Cards */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
              Our Service Stages
            </h2>
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
                        View offerings
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">
                Not Sure Where to Start?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Let's have a conversation about where you are and what might
                move the needle.
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
