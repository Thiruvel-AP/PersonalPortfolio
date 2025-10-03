
import type { PortfolioData } from '../types';

const STORAGE_KEY = 'portfolioData';

export const savePortfolioData = (data: PortfolioData): void => {
  try {
    const dataString = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, dataString);
  } catch (error) {
    console.error("Failed to save data to local storage:", error);
  }
};

export const getPortfolioData = (): PortfolioData | null => {
  try {
    const dataString = localStorage.getItem(STORAGE_KEY);
    if (dataString) {
      return JSON.parse(dataString) as PortfolioData;
    }
    return null;
  } catch (error) {
    console.error("Failed to retrieve data from local storage:", error);
    return null;
  }
};

export const clearPortfolioData = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear data from local storage:", error);
  }
};
