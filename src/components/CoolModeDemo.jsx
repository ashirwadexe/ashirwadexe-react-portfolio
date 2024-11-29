import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/ui/cool-mode";

export function CoolModeDemo() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Button variant="outline" className="text-white hover:text-white dark:text-white rounded-full bg-sky-400 hover:bg-sky-500 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg px-4 py-1 text-xs sm:px-6 sm:py-3 sm:text-base">Click Me 🥳!</Button>
      </CoolMode>
    </div>
  );
}
