import React from "react";

interface ReelCardProps {
  title: string;
  postedTime: string;
  status: string;
  authorName: string;
  authorImage: string;
  svgContent: string;
}

const ReelCard: React.FC<ReelCardProps> = ({
  title,
  postedTime,
  status,
  authorName,
  authorImage,
  svgContent,
}) => {
  return (
    <article className="overflow-hidden bg-[#2E3748] rounded-[10px]">
      <div className="w-full relative">
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="text-xs text-[#BEC5D1]">{postedTime}</div>
          <div className="text-xs p-2 rounded-[100px]">{status}</div>
        </div>
        <div className="text-base font-bold text-white mb-6">{title}</div>
        <div className="flex items-center gap-1.5">
          <img
            src={authorImage}
            alt={`${authorName}'s profile`}
            className="w-[30px] h-[30px] rounded-[20px]"
          />
          <div className="text-sm text-white">{authorName}</div>
        </div>
      </div>
    </article>
  );
};

export default ReelCard;
