// Este componente foi substituído pelo shadcn <Tabs> diretamente no AboutSection.
// Mantido aqui caso seja usado em outros lugares.
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <Button
      variant="ghost"
      onClick={selectTab}
      className={`mr-3 px-0 rounded-none font-semibold hover:bg-transparent hover:text-white ${
        active ? "text-white" : "text-[#ADB7BE]"
      }`}
    >
      <span>{children}</span>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3 absolute bottom-0 left-0"
      />
    </Button>
  );
};

export default TabButton;
