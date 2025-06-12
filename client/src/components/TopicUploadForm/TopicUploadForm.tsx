import React, { useState } from 'react';
import '../../styles/variables.css';
import './TopicUploadForm.css'; 
import { topics as topicsData } from '../../data/topics';

const topics: string[] = topicsData;

const UploadInterface: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [link, setLink] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const clearOthers = (field: 'topic' | 'link' | 'pdf') => {
    if (field === 'topic') {
      setLink('');
      setPdfFile(null);
    } else if (field === 'link') {
      setSelectedTopic('');
      setPdfFile(null);
    } else if (field === 'pdf') {
      setSelectedTopic('');
      setLink('');
    }
  };

  const handleSubmit = () => {
    if (selectedTopic) {
      console.log('Submitting Topic:', selectedTopic);
    } else if (link) {
      console.log('Submitting YouTube Link:', link);
    } else if (pdfFile) {
      console.log('Submitting PDF:', pdfFile.name);
    } else {
      alert('Please provide a topic, link, or PDF.');
    }
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Select a topic to learn</h2>

      <div className="form-group">
        <label>Select Topic:</label>
        <select
          value={selectedTopic}
          onChange={(e) => {
            setSelectedTopic(e.target.value);
            clearOthers('topic');
          }}
        >
          <option value="">-- Choose a topic --</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Enter YouTube Link:</label>
        <input
          type="text"
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
            clearOthers('link');
          }}
          placeholder="https://youtube.com/..."
        />
      </div>

      <div className="form-group">
        <label>Upload PDF File:</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => {
            setPdfFile(e.target.files?.[0] || null);
            clearOthers('pdf');
          }}
        />
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default UploadInterface;
