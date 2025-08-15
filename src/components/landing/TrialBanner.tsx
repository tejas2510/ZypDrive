import { useState } from "react";
import { X } from "lucide-react";

const TrialBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-primary text-white py-2 px-4 relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-center relative">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="animate-pulse">🎉</span>
          <span>Free trial - 15 days. No questions asked.</span>
          <span className="animate-pulse">🎉</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default TrialBanner;