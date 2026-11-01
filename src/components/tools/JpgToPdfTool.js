"use client";


import { useState } from "react";
import { jsPDF } from "jspdf";

export default function JpgToPdfTool() {
  
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFiles = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const convert = async () => {
    if (files.length === 0) return;
    setLoading(true);

    const pdf = new jsPDF();

    for (let i = 0; i < files.length; i++) {
      const dataUrl = await readAsDataURL(files[i]);
      const img = await loadImage(dataUrl);

      if (i > 0) pdf.addPage();
      const width = pdf.internal.pageSize.getWidth();
      const height = (img.height * width) / img.width;
      pdf.addImage(dataUrl, "JPEG", 0, 0, width, height);
    }

    pdf.save("pixelpdf-output.pdf");
    setLoading(false);
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow">
 {/* <div className=" h-40 bg-sky-200  cursor-pointer w-full flex "> */}
<input
  type="file"
  accept="image/jpeg,image/jpg"
  multiple
  onChange={handleFiles}
  className="block  text-sm text-gray-700 bg-gray-300 h-40 w-full file: cursor-pointer file:rounded-lg file:border-0 file:bg-red-600 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-red-700"
/>

  {/* </div> */}
      <p className="mt-2 text-sm text-gray-700">{files.length} file(s) selected</p>
      <button
  onClick={convert}
  disabled={loading || files.length === 0}
  className="group mt-4 inline-flex cursor-pointer items-center gap-2 rounded-lg
    bg-green-700 px-6 py-3 font-semibold text-white shadow-[0_4px_0_0_#15803d] transition-all duration-150 hover:bg-green-400 hover:shadow-[0_4px_0_0_#15803d,inset_0_3px_8px_rgba(0,0,0,0.25)]
    active:translate-y-1 active:shadow-[0_0_0_0_#15803d] disabled:cursor-not-allowed disabled:opacity-50"
>
  {loading ? "Converting..." : "Convert to PDF"}
  {!loading && (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 transition-transform duration-150 group-hover:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )}
</button>
    </div>
  );
}

function readAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}