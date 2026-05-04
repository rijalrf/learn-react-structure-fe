interface BadgeProps {
  status: "Ongoing" | "Ready To Process" | "Done";
}

const BadgeStatus = ({ status }: BadgeProps) => {
  const styles = {
    Ongoing: "text-[#007BFF] bg-blue-50",
    "Ready To Process": "text-[#F59E0B] bg-orange-50",
    Done: "text-[#10B981] bg-green-50",
  };

  const dotColors = {
    Ongoing: "bg-[#007BFF]",
    "Ready To Process": "bg-[#F59E0B]",
    Done: "bg-[#10B981]",
  };

  return (
    <span
      className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold w-fit ${styles[status]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColors[status]}`}></span>
      {status}
    </span>
  );
};

export default BadgeStatus;
