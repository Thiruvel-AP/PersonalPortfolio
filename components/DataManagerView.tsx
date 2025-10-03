import React, { useState, useCallback, useEffect } from 'react';
import { parseResume } from '../services/geminiService';
import { savePortfolioData, getPortfolioData, clearPortfolioData } from '../services/localStorageService';
import Loader from './Loader';
import type { PortfolioData } from '../types';
import { ProfileForm, ExperienceForm, EducationForm, ProjectsForm, SkillsForm } from './forms';
import { ConfirmationModal } from './LoginModal';


interface DataManagerViewProps {
  onDataUpdate: () => void;
}

const DataManagerView: React.FC<DataManagerViewProps> = ({ onDataUpdate }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<PortfolioData | null>(null);
  const [isSaveConfirmOpen, setIsSaveConfirmOpen] = useState(false);

  useEffect(() => {
    const existingData = getPortfolioData();
    if (existingData) {
      setFormData(existingData);
    } else {
        // Initialize with empty structure if no data exists
        setFormData({
            // FIX: Add missing required property 'imageUrl' to the initial profile data.
            profile: { name: '', title: '', location: '', email: '', summary: '', links: [], imageUrl: '', phone: '' },
            experience: [],
            education: [],
            skills: [],
            projects: []
        });
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleParseResume = useCallback(async () => {
    if (!file) {
      setError("Please select a PDF file first.");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const base64String = await fileToBase64(file);
      const data = await parseResume(base64String);
      setFormData(data);
      savePortfolioData(data);
      onDataUpdate();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [file, onDataUpdate]);

  const handleConfirmSave = () => {
    if (formData) {
        savePortfolioData(formData);
        onDataUpdate();
        alert("Data saved successfully!");
    } else {
        setError("No data to save.");
    }
  };

  const handleClearData = () => {
    if (window.confirm("Are you sure you want to delete all portfolio data? This action cannot be undone.")) {
        clearPortfolioData();
        setFormData(null); // Clear form state
        onDataUpdate();
    }
  }
  
  const handleFormChange = (section: keyof PortfolioData, data: any) => {
      setFormData(prev => prev ? { ...prev, [section]: data } : null);
  };


  if (!formData) {
      return <div className="text-center p-10">Loading data manager...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center">Manage Portfolio Data</h1>
      
      <div className="mb-8 p-6 bg-white/50 dark:bg-secondary/30 backdrop-blur-lg border border-gray-200/50 dark:border-border-color/50 rounded-xl">
        <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Option 1: Generate from Resume</h2>
        <p className="text-gray-600 dark:text-text-secondary mb-4">Upload your resume in PDF format. The AI will parse it and populate your portfolio. This will overwrite any existing data.</p>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-600 dark:text-text-secondary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-800 hover:file:bg-gray-300 dark:file:bg-accent dark:file:text-primary dark:hover:file:bg-highlight"
            aria-label="Upload Resume"
          />
          <button
            onClick={handleParseResume}
            disabled={isLoading || !file}
            className="flex items-center justify-center bg-gray-900 text-white dark:bg-accent dark:text-primary px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-highlight disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors w-full sm:w-auto"
          >
            {isLoading ? <Loader /> : 'Parse Resume'}
          </button>
        </div>
      </div>

      <div className="mb-6 p-6 bg-white/50 dark:bg-secondary/30 backdrop-blur-lg border border-gray-200/50 dark:border-border-color/50 rounded-xl">
        <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Option 2: Manual Edit</h2>
        <p className="text-gray-600 dark:text-text-secondary mb-4">You can directly edit the portfolio data using the forms below.</p>
        <div className="space-y-8">
            <ProfileForm data={formData.profile} onChange={(d) => handleFormChange('profile', d)} />
            <ExperienceForm data={formData.experience} onChange={(d) => handleFormChange('experience', d)} />
            <EducationForm data={formData.education} onChange={(d) => handleFormChange('education', d)} />
            <ProjectsForm data={formData.projects} onChange={(d) => handleFormChange('projects', d)} />
            <SkillsForm data={formData.skills} onChange={(d) => handleFormChange('skills', d)} />
        </div>
        <button
          onClick={() => setIsSaveConfirmOpen(true)}
          className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full text-lg"
        >
          Save All Changes
        </button>
      </div>

      {error && <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 border border-red-300 dark:border-red-700 rounded-lg" role="alert">{error}</div>}

       <div className="mt-12 p-6 bg-red-50 dark:bg-red-900/20 backdrop-blur-lg border border-red-200 dark:border-red-700/50 rounded-xl">
        <h2 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">Danger Zone</h2>
        <p className="text-gray-600 dark:text-text-secondary mb-4">This will permanently delete all your portfolio data from the browser.</p>
        <button
          onClick={handleClearData}
          className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >
          Clear All Data
        </button>
      </div>

      <ConfirmationModal
        isOpen={isSaveConfirmOpen}
        onClose={() => setIsSaveConfirmOpen(false)}
        onConfirm={handleConfirmSave}
        title="Confirm Save"
        message="Are you sure you want to save all changes?"
        confirmText="Save"
        confirmButtonVariant="primary"
      />
    </div>
  );
};

export default DataManagerView;