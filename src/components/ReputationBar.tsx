type Props = {
  level: number;
};

export default function ReputationBar({ level }: Props) {
  const colors = [
    { base: "bg-red-100", active: "bg-red-500" },
    { base: "bg-orange-100", active: "bg-orange-500" },
    { base: "bg-yellow-100", active: "bg-yellow-400" },
    { base: "bg-lime-100", active: "bg-lime-500" },
    { base: "bg-green-100", active: "bg-green-500" },
  ];

  return (
    <div className="flex gap-1">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`flex-1 transition-all ${
            index + 1 === level
              ? `${color.active} h-2`
              : `${color.base} h-2`
          }`}
        />
      ))}
    </div>
  );
}
