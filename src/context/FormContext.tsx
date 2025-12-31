import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormContextType {
  isFormOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    console.log('Opening form'); // Add this for debugging
    setIsFormOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeForm = () => {
    console.log('Closing form'); // Add this for debugging
    setIsFormOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <FormContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};