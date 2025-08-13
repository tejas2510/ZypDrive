const Footer = () => {
  return (
    <footer className="py-10 border-t">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <img src="/logo_proper.png" alt="Zypdrive Logo" className="h-8 w-8 object-contain" />
          <span className="font-heading">Zypdrive</span>
        </div>
        <div className="text-muted-foreground">
          Made with ❤️ by Tejas © {new Date().getFullYear()} Zypdrive. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
