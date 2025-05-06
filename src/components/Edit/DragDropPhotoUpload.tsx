"use client";

import Image from "next/image";
import { BiUpload } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { DiVim } from "react-icons/di";

type Props = {
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
  images: File[];
};
export default function DragDropPhotoUpload({ setImages, images }: Props) {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const selectedFiles = Array.from(files);
      console.log(selectedFiles);
      setImages((prevImage) => [...prevImage, ...selectedFiles]);
    }
  };
  const handelRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <div>
      <div className="">
        {images.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-6">
            <BiUpload className="w-10 h-10 text-green-500 mb-3" />
            <p className="text-base font-medium text-gray-700 mb-2 text-center">
              Drag and drop your images here
            </p>
            <p className="text-sm text-gray-500 mb-4 text-center">
              or click to browse files
            </p>
            <label
              htmlFor="image"
              className="cursor-pointer px-4 py-2 bg-[var(--primary)]hover:bg-green-700 text-white font-medium rounded-md transition-colors text-sm"
            >
              Browse image
            </label>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {images.map((img, idx) => (
              <div key={idx} className="relative">
                <Image
                  src={URL.createObjectURL(img)}
                  alt={`Preview ${idx}`}
                  width={200}
                  height={200}
                  className="w-full h-40 object-cover rounded-md"
                />
                <button
                  onClick={() => handelRemoveImage(idx)}
                  aria-label="Remove image"
                  type="button"
                  className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full"
                >
                  <CgClose className="w-4 h-4" />
                </button>
              </div>
            ))}
            {/* 2nd upload Button */}
            <label
              htmlFor="image"
              className={`flex items-center justify-center border-2 border-dashed rounded-md h-40 cursor-pointer hover:border-green-400 transition ${
                images.length > 2 && "hidden"
              }`}
            >
              <BiUpload className="w-6 h-6 text-green-500" />
            </label>
          </div>
        )}
        <label htmlFor="image"></label>
        <input
          onChange={handleImageChange}
          type="file"
          className="hidden"
          multiple
          accept="image/*"
          id="image"
        />
      </div>
    </div>
  );
}
