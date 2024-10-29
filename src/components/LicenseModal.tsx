import React from 'react';
import { Copy, X } from 'lucide-react';

interface LicenseModalProps {
  licenseKey: string;
  onClose: () => void;
}

export function LicenseModal({ licenseKey, onClose }: LicenseModalProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(licenseKey);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl">
        <div className="neon-border glass-effect p-8">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-orange-300 transition-colors hover:text-orange-100"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-orange-100">
              Your License Key
            </h3>
            <p className="mb-6 text-orange-200/70">
              Please save this key in a secure location. You'll need it to activate your application.
            </p>

            <div className="group relative mb-6 overflow-hidden rounded-lg bg-gray-900/50 p-4">
              <p className="break-all font-mono text-sm text-orange-300">
                {licenseKey}
              </p>
              <button
                onClick={copyToClipboard}
                className="absolute right-2 top-2 rounded-md bg-red-900/50 p-2 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-4 w-4 text-orange-300" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-full rounded-lg bg-gradient-to-r from-red-600 to-orange-500 px-4 py-3 font-semibold text-white transition-all hover:from-red-500 hover:to-orange-400"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}