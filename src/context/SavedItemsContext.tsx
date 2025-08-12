import React, { createContext, useState, useContext, useEffect } from 'react';
import { Place, Package } from '../types';

type SavedItem = Place | Package;

interface SavedItemsContextType {
  savedItems: SavedItem[];
  addToSaved: (item: SavedItem) => void;
  removeFromSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
}

const SavedItemsContext = createContext<SavedItemsContextType | undefined>(undefined);

export const useSavedItems = () => {
  const context = useContext(SavedItemsContext);
  if (context === undefined) {
    throw new Error('useSavedItems must be used within a SavedItemsProvider');
  }
  return context;
};

export const SavedItemsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);

  // Load saved items from localStorage
  useEffect(() => {
    const storedItems = localStorage.getItem('flyobo_saved_items');
    if (storedItems) {
      setSavedItems(JSON.parse(storedItems));
    }
  }, []);
