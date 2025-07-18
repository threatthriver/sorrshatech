import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background py-20 text-foreground sm:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16 text-center sm:mb-20">
          <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            We're here to help. Get in touch with our team for inquiries, partnerships, or support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-xl border border-border/50 bg-card p-6 sm:p-8 lg:p-12">
            <h2 className="mb-8 font-serif text-2xl font-bold sm:text-3xl">Send us a message</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" rows={5} />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8 lg:space-y-10">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">Our Information</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 text-primary bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-foreground">Email</h3>
                  <p className="mt-1 text-muted-foreground">
                    <a href="mailto:contact@sorrshatech.com" className="hover:text-primary transition-colors">contact@sorrshatech.com</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 text-primary bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-foreground">Phone</h3>
                  <p className="mt-1 text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 text-primary bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-foreground">Address</h3>
                  <p className="mt-1 text-muted-foreground">123 Tech Park, Silicon Valley, CA 94025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
