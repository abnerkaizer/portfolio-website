import { Badge } from "@/components/ui/badge";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <Badge
      onClick={() => onClick(name)}
      variant="outline"
      className={`
        rounded-full px-6 py-3 text-xl cursor-pointer border-2 transition-colors
        ${isSelected
          ? "text-white border-blue-500"
          : "text-[#ADB7BE] border-slate-600 hover:border-white hover:text-white"
        }
      `}
    >
      {name}
    </Badge>
  );
};

export default ProjectTag;
