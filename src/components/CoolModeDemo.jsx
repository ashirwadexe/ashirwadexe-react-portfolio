import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/ui/cool-mode";

export function CoolModeDemo() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Button variant="outline" className="text-white hover:text-white dark:text-white rounded-full bg-sky-400 hover:bg-sky-500 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg px-3 py-4 text-sm sm:px-5 sm:py-4 sm:text-sm">Click Me 🥳!</Button>
      </CoolMode>
    </div>
  );
}
