import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Loader2,
} from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormData = z.infer<typeof formSchema>;

const ContactPage = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: FormData) {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(data);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-20 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium mb-6">
            Interested in collaboration, partnerships, or joining our research
            efforts? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Project Inquiry" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="text-right">
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>

          <motion.div
            className="bg-slate-50 p-10 rounded-2xl lg:p-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Contact Information
            </h3>
            <p className="text-slate-600 mb-8 font-medium">
              Have a question or a project in mind? Reach out to us directly.
            </p>

            <div className="space-y-6">
              <ContactInfoItem
                icon={<Mail className="h-5 w-5 text-slate-600" />}
                title="Email"
                value="contact@sorrshatech.com"
                href="mailto:contact@sorrshatech.com"
              />
              <ContactInfoItem
                icon={<MapPin className="h-5 w-5 text-slate-600" />}
                title="Location"
                value="Silicon Valley, California"
              />
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200">
              <h4 className="font-bold text-slate-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <SocialLink href="https://github.com/threatthriver/sorrshatech" icon={<Github />} />
                <SocialLink href="#" icon={<Linkedin />} />
                <SocialLink href="#" icon={<Twitter />} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href?: string }) => (
  <div className="flex items-start space-x-4">
    <div className="mt-1 h-8 w-8 flex-shrink-0 rounded-full bg-slate-200 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-800">{title}</h4>
      {href ? (
        <a
          href={href}
          className="text-slate-600 hover:text-slate-900 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-slate-600">{value}</p>
      )}
    </div>
  </div>
);

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 hover:text-slate-900 transition-colors"
  >
    {icon}
  </a>
);

export default ContactPage;
