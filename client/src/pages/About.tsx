/**
 * Design Philosophy: Neo-Corporate with Editorial Sensibility
 * - About page with company story and founder profile
 * - Editorial layout with gold accent bars
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/images/about-leadership.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                13 Years of Workday Delivery Leadership
              </h1>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-background relative overflow-hidden">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-5">
            <img
              src="/images/services-abstract.png"
              alt=""
              className="w-[600px] h-[600px] object-contain"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="accent-bar mb-12">
                <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I started Lightning Point because I saw an opportunity to help
                    organizations navigate Workday implementations with experienced,
                    independent support. After 13 years at Workday—including leading
                    Professional Services in Canada—I've seen what makes implementations
                    succeed: clear governance, strong decisions, and teams built for
                    long-term ownership.
                  </p>
                  <p>
                    Lightning Point brings that experience to your program. We work
                    alongside your team and your implementation partner to provide
                    the senior expertise and independent perspective that complex
                    programs need—strengthening partnerships, not competing with them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Our Approach
              </h2>
              <div className="bg-card border border-border rounded-xl p-8 md:p-12">
                <h3 className="text-2xl font-semibold mb-6 text-accent">
                  People-First Projects
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At current ERP software maturity levels, the real
                    differentiator is how well implementations serve people. We
                    focus on three dimensions:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong className="text-foreground">
                          Systems that are delightful and easy to use
                        </strong>{" "}
                        — Technology should serve people, not frustrate them.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong className="text-foreground">
                          Empowered decision-makers who understand business needs
                        </strong>{" "}
                        — Internal teams must own the platform long-term.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong className="text-foreground">
                          Respect for people's capacity to avoid burnout
                        </strong>{" "}
                        — Sustainable delivery protects your team.
                      </span>
                    </li>
                  </ul>
                  <p className="pt-4">
                    Great systems need people who can sustain them. We protect
                    team capacity, build internal capability, and design for
                    ownership—not dependency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Profile */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="accent-bar">
                <h2 className="text-3xl font-semibold mb-8">Meet Our Founder</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-semibold mb-2">Jeff Tummon</h3>
                    <p className="text-accent font-medium mb-6">
                      Founder & Principal
                    </p>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Jeff brings 13+ years of Workday delivery leadership
                        experience spanning all industries, project sizes, and
                        deployment approaches. As the former Head of
                        Professional Services (Canada) at Workday and a
                        Certified Engagement Manager, he has led and sponsored
                        complex, global deployments across commercial,
                        healthcare, financial services, and public sector
                        organizations.
                      </p>
                      <p>
                        Known for bringing clarity, discipline, and a sense of
                        calm to complex programs, Jeff helps organizations
                        deliver successful Workday implementations without the
                        drama.
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="text-sm font-semibold mb-3 text-accent">
                        KEY CREDENTIALS
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          13+ years Workday experience
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          Certified Engagement Manager
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          Former Head of Professional Services (Canada) at
                          Workday
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          Full lifecycle expertise across all deployment
                          approaches
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          Experience leading program recovery and course correction
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">Ready to Talk?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Let's have a conversation about where you are and what might
                move the needle.
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
