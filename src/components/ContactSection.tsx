import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) {
      setErrorMessage(null);
    }
    if (status === "error") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honeypot.trim().length > 0) {
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name || !form.email || !form.message) {
      setErrorMessage("Please add your name, a valid email, and a short message.");
      return;
    }

    if (!emailPattern.test(form.email)) {
      setErrorMessage("That email doesn&apos;t look quite right. Double-check and try again.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage("The contact form email service isn&apos;t configured yet.");
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);
    setStatus("submitting");
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "New message from portfolio",
          message: form.message,
        },
        publicKey,
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setHoneypot("");
      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong. Your message wasn&apos;t sent. Please try again in a moment.");
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div initial={false} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ duration: 0.7 }} className="text-center mb-20">
            <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-display text-6xl md:text-9xl mb-6">
              LET'S <span className="text-gradient">TALK</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? 
              I'd love to hear from you.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info Cards */}
            <motion.div initial={false} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-2 space-y-6">
              <div className="glass p-8 rounded-2xl">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-2xl mb-2">EMAIL ME</h3>
                <a
                  href="mailto:kyathamsiddeshwar@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  kyathamsiddeshwar@gmail.com
                </a>
              </div>

              <div className="glass p-8 rounded-2xl">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-2xl mb-2">LOCATION</h3>
                <p className="text-muted-foreground">
                  Hyderabad, India
                  <br />
                  Open to Remote Opportunities
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.97 }}
                    initial={false}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.12 + index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form / Feedback */}
            <motion.div
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-3"
            >
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass p-8 md:p-12 rounded-2xl space-y-3"
                >
                  <p className="text-sm text-muted-foreground">thank you</p>
                  <h3 className="font-display text-2xl md:text-3xl">
                    Your message has been sent.
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base max-w-md">
                    I&apos;ve received your note and I&apos;ll get back to you as soon as I can.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass p-8 md:p-12 rounded-2xl space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Honeypot field for basic spam protection */}
                  <label className="hidden" aria-hidden="true">
                    Company
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      className="hidden"
                    />
                  </label>

                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What can we build together?"
                      className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Share a few lines about your project, idea, or brief."
                      className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      required
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-muted-foreground">
                      {errorMessage}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-medium py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5" />
                  </motion.button>
                </motion.form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default ContactSection;
