/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps, consistent-return */
import { ChangeEvent, DragEvent, useEffect, useRef, useState } from 'react';
import './PdfCombiner.css';

export default function PdfCombiner() {
  const [pdf, setPdf] = useState<File[]>([]);
  const [isSort, setIsSort] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [filename, setFilename] = useState<string>('');

  const handleDrop = (
    event: DragEvent<HTMLDivElement> | ChangeEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    const { files } =
      'dataTransfer' in event
        ? event.dataTransfer
        : (event.target as HTMLInputElement);

    const nextPdf = [];
    for (let i = 0; i < files!.length; i += 1) {
      nextPdf.push(files![i]);
    }
    if (isSort) nextPdf.sort((a, b) => a.name.localeCompare(b.name));
    setPdf(nextPdf);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // 드롭 가능하도록 허용
  };

  const combinePdf = () => {
    const pdfPath = pdf.map((v) => v.path);

    window.electron.ipcRenderer.sendMessage('combine-pdf', {
      pdfPath,
      filename,
    });
  };

  const handleFilenameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilename(e.target.value);
    window.localStorage.setItem('filename', e.target.value);
  };

  useEffect(() => {
    setFilename(window.localStorage.getItem('filename') || '');
  }, []);

  return (
    <div>
      <h2>🗂️ PDF COMBINER 🗂️</h2>
      <h4>선택한 pdf 파일: {pdf.map((v) => v.name).join(', ')}</h4>
      <div className="option-container">
        <label htmlFor="filename">
          파일명
          <input
            id="filename"
            type="text"
            value={filename}
            placeholder="생성될 파일명을 입력해주세요"
            onChange={handleFilenameChange}
          />
        </label>
        <label htmlFor="sort">
          이름순 정렬
          <input
            id="sort"
            type="checkbox"
            checked={isSort}
            onChange={() => setIsSort(!isSort)}
          />
        </label>
      </div>
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
      <button onClick={combinePdf} type="button">
        합치기
      </button>
    </div>
  );
}
