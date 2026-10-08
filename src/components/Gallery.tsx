import fs from 'fs';
import path from 'path';
import GalleryCarousel from './GalleryCarousel';

export default function Gallery() {
  let images: string[] = [];
  
  try {
    // Leemos el directorio en tiempo de construcción (SSG)
    const galleryPath = path.join(process.cwd(), 'public', 'recursos', 'galeria');
    if (fs.existsSync(galleryPath)) {
      const files = fs.readdirSync(galleryPath);
      // Filtramos solo imágenes webp, png, jpg, jpeg y ordenamos alfabéticamente
      images = files
        .filter(file => /\.(webp|png|jpg|jpeg)$/i.test(file))
        .sort()
        .map(file => `/recursos/galeria/${file}`);
    }
  } catch (error) {
    console.error("Error reading gallery directory:", error);
  }

  // Si no hay imágenes, no mostramos nada
  if (images.length === 0) {
    return null;
  }

  return <GalleryCarousel images={images} />;
}
