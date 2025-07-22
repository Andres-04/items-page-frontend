import StarRating from "@/components/StarRating";
import CommentsList from "@/components/CommentsList";

type Review = {
  date: string;
  comment: string;
  score: number;
  images: string[];
};

type FeaturesReview = {
  name: string;
  value: number;
};

type Reviews = {
  score: number;
  total: number;
  reviews: Review[];
  features_review: FeaturesReview[];
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
              <span className="text-4xl font-bold text-blue-500">{reviews.score}</span>
              <div className="flex text-blue-500">
                <StarRating rating={reviews.score} />
              </div>
            </div>
            <p className="text-sm text-gray-500">{reviews.total} calificaciones</p>
          </div>

          <div>
            <p className="font-medium text-lg">Calificación de características</p>
            {reviews.features_review.map((feature) => (
              <div key={feature.name} className="flex flex-col gap-1">
                <span>{feature.name}</span>
                <StarRating rating={feature.value} />
              </div>
            ))}
          </div>
        </div>

        {/* Lado derecho: Opiniones */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* Fotos */}
          <div>
            <h3 className="font-semibold">Opiniones con fotos</h3>
            <div className="flex space-x-2 mt-2">
              {reviews.reviews.map((item, index) => (
                item.images.length > 0 && (
                  <div key={index} className="flex space-x-2 mt-2">
                    {item.images.map((photoUrl, i) => (
                      <img
                        key={i}
                        src={photoUrl}
                        alt={`Foto ${i + 1}`}
                        className="w-14 h-20 object-contain rounded-md"
                      />
                    ))}
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Opiniones destacadas */}
          <div>
            <h3 className="font-semibold">Opiniones destacadas</h3>
            <p className="text-sm text-gray-500">{reviews.reviews?.length || 0} comentarios</p>
            {/* Ejemplo de Comentario */}
            <CommentsList reviews={reviews.reviews}/>
          </div>
        </div>
      </div>
    </div>
  );
}