"use client";
import DragDropPhotoUpload from "@/components/Edit/DragDropPhotoUpload";
import React, { useState } from "react";

export default function Edit() {
  const [images, setImages] = useState<File[]>([]);
  console.log(images);
  return (
    <div className="container mx-auto border">
      <DragDropPhotoUpload images={images} setImages={setImages} />
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea></textarea>
        </div>
      </form>
    </div>
  );
}
