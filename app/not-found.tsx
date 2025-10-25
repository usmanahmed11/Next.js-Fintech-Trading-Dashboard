export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h2 className="text-4xl font-bold text-foreground mb-4">404 - Page Not Found</h2>
      <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
    </div>
  );
}

