import React from 'react';

interface CustomAlertProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, type, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const borderColor = type === 'success' ? 'border-green-700' : 'border-red-700';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`rounded-lg p-6 shadow-lg max-w-sm w-full ${bgColor} border ${borderColor} text-white`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{type === 'success' ? 'Success' : 'Error'}</h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default CustomAlert; 