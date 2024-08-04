import { ChangeEvent, useState } from 'react';
import './PdfCombiner.css';

export default function PdfCombiner() {
  const [envPath, setEnvPath] = useState(
    localStorage.getItem('env_path') || '',
  );

  const handleEnvPath = (e: ChangeEvent<HTMLInputElement>) => {
    setEnvPath(e.target.value);
    return localStorage.setItem('env_path', e.target.value);
  };
  const handleEnvFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setEnvPath(file?.path || '');
    return localStorage.setItem('env_path', file?.path || '');
  };

  return (
    <div>
      <h4>선택한 ENV 파일: {envPath}</h4>
      <div className="path">
        <label htmlFor="fileInput" className="custom-file-label">
          <input id="fileInput" type="file" onChange={handleEnvFile} />
          Select Your Env File
        </label>
        <input
          id="pathInput"
          onChange={handleEnvPath}
          value={envPath}
          placeholder="path를 입력하세요"
        />
      </div>
    </div>
  );
}
