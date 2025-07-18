import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-8xl sm:text-9xl font-bold font-serif text-primary mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Page Not Found</h2>
        <p className="mt-4 text-lg text-muted-foreground mb-8">Sorry, we couldn’t find the page you’re looking for.</p>
        <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg">
          <Link to="/">Go back home</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFoundPage;
