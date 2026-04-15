"use client";

import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(true);
  const phone = "234000000000"; // placeholder — update when client confirms

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {tooltip && (
        <div className="bg-white border border-forest-100 shadow-lg rounded-sm px-4 py-3 text-sm text-forest-800 max-w-52 text-right flex items-start gap-2">
          <span className="leading-snug">Chat with us on WhatsApp</span>
          <button
            onClick={() => setTooltip(false)}
            className="text-forest-400 hover:text-forest-600 transition-colors shrink-0 mt-0.5"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
      <a
        href={`https://wa.me/${phone}?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20Family%20Care%20Farms%20Initiatives%20Nigeria.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
        aria-label="Chat on WhatsApp"
        onClick={() => setTooltip(false)}
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );
}
