import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { toast } from "react-toastify";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input, { Textarea } from "@/components/ui/Input";
import { socialLinks } from "@/data/socialLinks";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportConfig,
} from "@/utils/animations";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      // EmailJS integration placeholder
      // await emailjs.send('service_id', 'template_id', data, 'public_key');
      console.log("Form data:", data);
      toast.success("Message sent successfully! I'll get back to you soon.", {
        position: "bottom-right",
        theme: "dark",
      });
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        position: "bottom-right",
        theme: "dark",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32"
      aria-label="Contact section"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or just want to say hi? Feel free to reach out."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
        >
          {/* Contact Info */}
          <motion.div
            variants={slideInLeft}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="p-6" spotlight={false}>
              <h3 className="text-lg font-semibold text-text mb-6">
                Get in Touch
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">Email</p>
                    <a
                      href="mailto:akakeh560@gmail.com"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      akakeh560@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">Location</p>
                    <p className="text-sm text-muted">Remote / Global</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">Phone</p>
                    <a
                      href="tel:+963966782020"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      +963 966 782 020
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm font-medium text-text mb-3">Follow Me</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ id, name, url, icon: Icon }) => (
                    <a
                      key={id}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="p-2.5 rounded-xl bg-surface-light/50 border border-border text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={slideInRight} className="lg:col-span-3">
            <Card className="p-6 md:p-8" spotlight={false}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    id="name"
                    label="Name"
                    placeholder="Your name"
                    error={errors.name?.message}
                    {...register("name")}
                  />
                  <Input
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                </div>

                <Input
                  id="subject"
                  label="Subject"
                  placeholder="What's this about?"
                  error={errors.subject?.message}
                  {...register("subject")}
                />

                <Textarea
                  id="message"
                  label="Message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  error={errors.message?.message}
                  {...register("message")}
                />

                <Button
                  type="submit"
                  icon={Send}
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
