"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";
import { UploadButton } from "../../utils/uploadthing";
import React from "react";
import { UploadDropzone } from "../../utils/uploadthing";

type UploadType = {
  value: string;
  endPoint: "imageUploader" | "messageFile";
  onChange: (url?: string) => void;
};

const UploadImage: React.FC<UploadType> = ({ endPoint, value, onChange }) => {
  const file = value.split(".").pop();

  if (value && file !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image src={value} alt="upload" className="rounded-full" fill={true} />
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endPoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].fileUrl);
      }}
    />
  );
};

export default UploadImage;
