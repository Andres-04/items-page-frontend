import { ThumbsUp } from "lucide-react";
import StarRating from "@/components/StarRating";
import ReportButton from "@/components/ReportButton";

type Review = {
  date: string;
  comment: string;
  score: number;
  images: string[];
};

type Props = {
  reviews: Review[];
};

export default function CommentsList({ reviews }: Props) {
  return (
    <div className="space-y-4">
      {reviews.map((item, index) => (
        <div key={index} className="p-4 space-y-2 mt-2">
          <div className="flex justify-between items-center">
            <StarRating rating={item.score} />
            <p className="text-xs text-gray-400">{item.date}</p>
          </div>

          {item.images.length > 0 && (
            <div className="flex space-x-2 mt-2">
              {item.images.map((photoUrl, i) => (
                <img
                  key={i}
                  src={photoUrl}
                  alt={`Foto ${i + 1}`}
                  className="w-14 h-20 object-contain rounded-md"
                />
              ))}
            </div>
          )}

          <p className="text-sm">{item.comment}</p>

          <div className="text-xs text-gray-400 flex justify-between items-center gap-4">
            <button className="flex items-center gap-x-1 border px-2 py-1 rounded-xl text-xs">
              Es útil
              <ThumbsUp className="h-4 w-4 text-muted-foreground" />
              1
            </button>
            <ReportButton />
          </div>
        </div>
      ))}
    </div>
  );
}
