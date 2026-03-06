import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 bg-muted border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="text-minimal text-foreground">SKYVIEW</Link>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Making AI easy.
              </p>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-minimal text-foreground mb-4">SERVICIOS</h4>
              <div className="space-y-3">
                <Link to="/que-hacemos" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Qué Hacemos</Link>
                <Link to="/oficina-IA" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Oficina IA</Link>
                <Link to="/proyectos" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Clientes</Link>
              </div>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="text-minimal text-foreground mb-4">EMPRESA</h4>
              <div className="space-y-3">
                <Link to="/blog" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Recursos</Link>
                <Link to="/contacto" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Contacto</Link>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-minimal text-foreground mb-4">LEGAL</h4>
              <div className="space-y-3">
                <Link to="/aviso-legal" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Aviso Legal</Link>
                <Link to="/privacidad" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Privacidad y RGPD</Link>
                <Link to="/condiciones-sow" className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">Condiciones SOW</Link>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Skyview. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">LinkedIn</a>
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
