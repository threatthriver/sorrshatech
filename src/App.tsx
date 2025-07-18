import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { HelmetProvider } from "react-helmet-async";
import { PageLayout } from "@/components/PageLayout";
import { BackToTopButton } from "@/components/BackToTopButton";

// Lazy load routes for better performance
const Index = lazy(() => import("@/pages/Index"));
const Waitlist = lazy(() => import("@/pages/Waitlist"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const CompaniesPage = lazy(() => import("@/pages/CompaniesPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const TeamPage = lazy(() => import("@/pages/TeamPage"));

// PageLoading component for suspense fallbacks
const PageLoading = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <LoadingSpinner size="lg" />
  </div>
);

// Configure query client with optimized defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (replaces cacheTime in v5+)
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: "always",
    },
  },
});

const AppLayout = () => (
  <PageLayout>
    <ErrorBoundary fallback={<PageLoading />}>
      <Outlet />
    </ErrorBoundary>
  </PageLayout>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background font-sans antialiased">
          <HelmetProvider>
            <BrowserRouter>
              <Suspense fallback={<PageLoading />}>
                <Toaster />
                <Sonner />
                <BackToTopButton />
                <Routes>
                  <Route element={<AppLayout />}>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/company" element={<CompaniesPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/waitlist" element={<Waitlist />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </Suspense>
            </BrowserRouter>
          </HelmetProvider>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
