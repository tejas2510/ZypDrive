const Footer = () => {
  return (
    <footer className="py-10 border-t">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/10 grid place-items-center">
            <span className="text-primary font-extrabold">Z</span>
          </div>
          <span className="font-heading">Zypdrive</span>
        </div>
        <div className="text-muted-foreground">© {new Date().getFullYear()} Zypdrive. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;