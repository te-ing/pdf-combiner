/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps, consistent-return */
import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import './PdfCombiner.css';

export default function PdfCombiner() {
  const [pdf, setPdf] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (
    event: DragEvent<HTMLDivElement> | ChangeEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    const { files } =
      'dataTransfer' in event
        ? event.dataTransfer
        : (event.target as HTMLInputElement);
    console.log('files', files);
    const nextPdf = [];
    for (let i = 0; i < files!.length; i += 1) {
      nextPdf.push(files![i]);
    }
    setPdf(nextPdf);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // 드롭 가능하도록 허용
  };

  return (
    <div>
      <h2>🗂️ PDF COMBINER 🗂️</h2>
      <h4>선택한 pdf 파일: {pdf.map((v) => v.name).join(', ')}</h4>
      <div className="path">
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="dropzone"
          onClick={() => inputRef.current?.click()}
        >
          <input type="file" multiple ref={inputRef} onChange={handleDrop} />
          <p>Drop the pdf files here ...</p>
        </div>
      </div>
    </div>
  );
}
