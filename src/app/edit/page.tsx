"use client";
import DragDropPhotoUpload from "@/components/Edit/DragDropPhotoUpload";
import React, { useState } from "react";

export default function Edit() {
  const [images, setImages] = useState<File[]>([]);
  console.log(images);
  return (
    <div className="container mx-auto">
      <DragDropPhotoUpload images={images} setImages={setImages} />
    </div>
  );
}
