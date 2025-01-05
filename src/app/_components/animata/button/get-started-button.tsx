import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface IGetStartedButtonProps {
  text: string;
  className?: string;
}

export default function GetStartedButton({
  text = "Get started",
  className,
}: IGetStartedButtonProps) {
  return (
    <div className="min-h-12 md:w-48 w-44">
      <button
        className={cn(
          "group flex h-12 w-40 items-center justify-center gap-3 rounded-3xl bg-blue-100 p-2 font-bold transition-colors duration-100 ease-in-out hover:bg-blue-600",
          className,
        )}
      >
        <span
          className={cn(
            "text-blue-600 transition-colors duration-100 ease-in-out group-hover:text-blue-100",
          )}
        >
          {text}
        </span>
        <div
          className={cn(
            "relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full transition-transform duration-100",
            "bg-blue-600 group-hover:bg-blue-100",
          )}
        >
          <div className="absolute left-0 flex h-7 w-14 -translate-x-1/2 items-center justify-center transition-all duration-200 ease-in-out group-hover:translate-x-0">
            <ArrowRight
              size={16}
              className={cn(
                "size-7 transform p-1 text-blue-600 opacity-0 group-hover:opacity-100",
              )}
            />
            <ArrowRight
              size={16}
              className={cn(
                "size-7 transform p-1 text-blue-100 opacity-100 transition-transform duration-300 ease-in-out group-hover:opacity-0",
              )}
            />
          </div>
        </div>
      </button>
    </div>
  );
}
