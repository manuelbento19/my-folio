import { useState } from "react";
import { BiClipboard, BiX } from "react-icons/bi";
import { BsClipboardCheck } from "react-icons/bs";

type Props = {
  onClose: () => void;
  link: string;
};

export const CopyLinkModal = ({ onClose, link }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(link);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <BiX className="size-5" />
        </button>
        <div className="relative w-full mt-8 flex items-center">
          <input
            value={link}
            readOnly
            className="rounded-md w-full h-14 py-2 pl-4 pr-32 outline-none border border-gray-100"
          />
          <button
            disabled={isCopied}
            onClick={copyLink}
            type="submit"
            className={`absolute inline-flex items-center gap-2 h-10 rounded-md p-2 text-xs right-3 top-1.2 text-white ${
              isCopied ? "bg-green-600" : "bg-gray-700"
            }`}
          >
            {isCopied ? (
              <BsClipboardCheck className="size-4" />
            ) : (
              <BiClipboard className="size-4" />
            )}
            {isCopied ? "Copiado!" : "Copiar"}
          </button>
        </div>
      </div>
    </div>
  );
};
