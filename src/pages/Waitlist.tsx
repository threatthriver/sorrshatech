import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const WaitlistPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the API call to your waitlist service
    console.log('Submitted email:', email);
    alert('Thank you for joining our waitlist!');
    setEmail('');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="container mx-auto px-4 py-20 text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-primary mb-4">Join Our Waitlist</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Be the first to know when we launch. We are building something amazing and can't wait to share it with you.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-lg px-6 py-6 rounded-full bg-input"
          />
          <Button type="submit" variant="outline" className="rounded-full px-8 py-6 text-lg">
            Notify Me
          </Button>
        </form>
      </div>
    </section>
  );
};

export default WaitlistPage;

