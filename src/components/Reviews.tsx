import { Star, ThumbsUp } from "lucide-react";

type Review = {
  date: string;
  comment: string;
  score: number;
  images: string[];
};

type Reviews = {
  score: number;
  total: number;
  review: Review[];
};

type Props = {
  reviews: Reviews;
};

export default function Reviews({ reviews }: Props) {
  return (
    <div className="w-full bg-white">
      <h2 className="text-2xl font-semibold mb-4">Opiniones del producto</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Lado izquierdo: Calificaciones */}
        <div className="w-full md:w-1/3 space-y-6">
          <div>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-4xl font-bold">{reviews.score}</span>
              <div className="flex text-blue-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} fill="currentColor" className="w-4 h-4" />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500">{reviews.total} calificaciones</p>
          </div>

          <div>
            <p className="font-medium text-sm">Calificación de características</p>
            <div className="space-y-2 mt-2 text-sm text-gray-700">
              <div>Relación precio-calidad ⭐⭐⭐⭐⭐</div>
              <div>Calidad de la cámara ⭐⭐⭐⭐☆</div>
              <div>Duración de la batería ⭐⭐⭐⭐☆</div>
              <div>Durabilidad ⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>

        {/* Lado derecho: Opiniones */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* Fotos */}
          <div>
            <h3 className="font-semibold">Opiniones con fotos</h3>
            <div className="flex space-x-2 mt-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-28 bg-gray-200 rounded-md flex items-center justify-center text-xs"
                >
                  Foto {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Opiniones destacadas */}
          <div>
            <h3 className="font-semibold">Opiniones destacadas</h3>
            <p className="text-sm text-gray-500">248 comentarios</p>
            <div className="border rounded-md p-4 space-y-2 mt-2">
              <div className="flex items-center gap-2 text-blue-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} fill="currentColor" className="w-4 h-4" />
                ))}
              </div>
              <p className="text-sm">Nada que objetar, muy buen producto... supera mis expectativas.</p>
              <div className="text-xs text-gray-400 flex items-center gap-4">
                <p>07 feb. 2025</p>
                <button className="border px-2 py-1 rounded-md text-xs">Es útil {<ThumbsUp className="h-4 w-4 text-muted-foreground" />} 28</button>
              </div>
            </div>
          </div>

          {/* Otra reseña */}
          <div className="border rounded-md p-4 space-y-2">
            <div className="flex items-center gap-2 text-blue-500">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star key={i} fill="currentColor" className="w-4 h-4" />
              ))}
              <Star className="w-4 h-4 text-gray-300" />
            </div>
            <div className="flex space-x-2 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-14 h-20 bg-gray-200 rounded-md flex items-center justify-center text-xs"
                >
                  Foto {i + 1}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-700">
              Recibí tal cuál lo que quería, no me quejaré de alguna especificación del celular porque fui consciente de todo antes de la compra...
            </p>
            <p className="text-xs text-gray-400">18 abr. 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}