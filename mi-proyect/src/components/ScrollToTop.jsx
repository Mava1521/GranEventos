import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Restablece el scroll al inicio de la página cada vez que cambie la ruta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Puedes cambiar a 'auto' si prefieres un salto instantáneo sin animación
    });
  }, [pathname]);

  return null;
}