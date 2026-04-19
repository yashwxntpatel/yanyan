const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div className="max-w-xl">
        <p className="font-sans-lux mb-5 text-[10px] text-gold">Page Not Found</p>
        <h1 className="font-display mb-6 text-gold text-5xl md:text-7xl">404</h1>
        <p className="mx-auto mb-8 max-w-md text-base leading-7 text-ivory/72 md:text-lg">
          The page you are looking for does not exist or may have moved.
        </p>
        <a href="/" className="btn-gold">Return Home</a>
      </div>
    </main>
  );
};

export default NotFound;
