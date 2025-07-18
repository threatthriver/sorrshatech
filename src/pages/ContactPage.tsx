import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const ContactPage = () => {
  return (
    <div className="min-h-screen py-24 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help. Get in touch with our team for inquiries, partnerships, or support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="bg-card border border-border/50 rounded-xl p-8 lg:p-12">
            <h2 className="text-3xl font-serif font-bold mb-8">Send us a message</h2>
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

          <div className="space-y-10">
            <h2 className="text-3xl font-serif font-bold">Our Information</h2>
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
