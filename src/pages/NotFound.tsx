import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="container mx-auto max-w-2xl px-6 py-16 text-center sm:px-4">
        <h1 className="mb-4 font-serif text-7xl font-bold text-primary sm:text-8xl md:text-9xl">404</h1>
        <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">Page Not Found</h2>
        <p className="mb-8 mt-4 text-base text-muted-foreground sm:text-lg">Sorry, we couldn’t find the page you’re looking for.</p>
        <Button asChild variant="outline" className="h-12 rounded-full px-8 text-base sm:h-14 sm:text-lg">
          <Link to="/">Go back home</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFoundPage;
