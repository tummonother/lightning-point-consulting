/**
 * Design Philosophy: Neo-Corporate with Editorial Sensibility
 * - Contact page with form and contact information
 * - Clean, accessible form design
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    stage: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a toast. In production, this would submit to a backend
    toast.success(
      "Thank you for your message! We'll get back to you soon.",
      {
        description: "We typically respond within 1 business day.",
      }
    );
    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      stage: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Page Header */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                Start a Conversation
              </h1>
              <p className="text-xl leading-relaxed text-primary-foreground/90">
                Whether you're early in planning, mid-implementation, or
                stabilizing post-go-live—we're happy to explore how we can
                help. No pressure, no pitch deck. Just a conversation about
                where you are and what might move the needle.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 bg-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img
              src="/images/contact-pattern.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">
                          Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        type="text"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="stage">Current Stage</Label>
                      <Select
                        value={formData.stage}
                        onValueChange={(value) =>
                          setFormData({ ...formData, stage: value })
                        }
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your current stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="early">Early Planning</SelectItem>
                          <SelectItem value="implementing">
                            Implementing
                          </SelectItem>
                          <SelectItem value="post-golive">
                            Post-Go-Live
                          </SelectItem>
                          <SelectItem value="not-sure">Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">
                        How can we help? <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Send Message
                    </Button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Prefer email?{" "}
                      <a
                        href="mailto:info@lightningpoint.consulting"
                        className="text-accent hover:underline font-medium"
                      >
                        Reach us directly at info@lightningpoint.consulting
                      </a>
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="lg:col-span-1">
                  <div className="bg-card border border-border rounded-xl p-8 sticky top-24">
                    <h2 className="text-xl font-semibold mb-6">
                      Contact Information
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-medium mb-1">Email</p>
                            <a
                              href="mailto:info@lightningpoint.consulting"
                              className="text-sm text-muted-foreground hover:text-accent"
                            >
                              info@lightningpoint.consulting
                            </a>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-medium mb-1">Phone</p>
                            <a
                              href="tel:+16474074710"
                              className="text-sm text-muted-foreground hover:text-accent"
                            >
                              647.407.4710
                            </a>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm font-medium mb-1">Location</p>
                            <p className="text-sm text-muted-foreground">
                              Toronto, ON
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Serving North America
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
