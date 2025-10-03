import React, { useState } from 'react';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    confirmButtonVariant?: 'primary' | 'danger';
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ 
    isOpen, 
    onClose, 
    onConfirm, 
    title, 
    message,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    confirmButtonVariant = 'primary'
}) => {
    if (!isOpen) return null;

    const handleConfirm = () => {
        onConfirm();
        onClose();
    };

    const confirmButtonClasses = {
        primary: 'bg-green-600 text-white hover:bg-green-700',
        danger: 'bg-red-600 text-white hover:bg-red-700'
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-fade-in-up"
            aria-modal="true"
            role="dialog"
            onClick={onClose}
        >
            <div 
                className="bg-white/80 dark:bg-secondary/50 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-full max-w-sm border border-gray-200/50 dark:border-border-color/50"
                onClick={e => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">{title}</h2>
                <p className="text-center text-gray-600 dark:text-text-secondary mb-6">{message}</p>
                <div className="flex items-center justify-center space-x-4 mt-6">
                     <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-text-secondary hover:text-gray-900 dark:hover:text-text-primary hover:bg-black/10 dark:hover:bg-white/10 border border-gray-300 dark:border-border-color/50 transition-colors"
                    >
                        {cancelText}
                    </button>
                    <button
                        type="button"
                        onClick={handleConfirm}
                        className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${confirmButtonClasses[confirmButtonVariant]}`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};


interface LoginModalProps {
    onClose: () => void;
    onLoginAttempt: (email: string) => boolean;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLoginAttempt }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        const success = onLoginAttempt(email);
        if (!success) {
            setError("Invalid email address. Access denied.");
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-fade-in-up"
            aria-modal="true"
            role="dialog"
            onClick={onClose}
        >
            <div 
                className="bg-white/80 dark:bg-secondary/50 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-full max-w-sm border border-gray-200/50 dark:border-border-color/50"
                onClick={e => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-text-secondary mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (error) {
                                    setError(null);
                                }
                            }}
                            required
                            className={`w-full bg-gray-100 dark:bg-primary/50 border ${error ? 'border-red-500' : 'border-gray-300 dark:border-border-color'} text-gray-800 dark:text-text-primary rounded-md px-3 py-2 focus:ring-2 ${error ? 'focus:ring-red-500 focus:border-red-500' : 'focus:ring-blue-500 dark:focus:ring-accent focus:border-blue-500 dark:focus:border-accent'} transition-colors`}
                            placeholder="Enter admin email"
                        />
                    </div>
                     {error && (
                        <p className="text-red-500 text-sm -mt-2 mb-4 text-center">{error}</p>
                    )}
                    <div className="flex items-center justify-between mt-6">
                         <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-text-secondary hover:text-gray-900 dark:hover:text-text-primary hover:bg-black/10 dark:hover:bg-white/10 border border-gray-300 dark:border-border-color/50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white dark:bg-accent dark:text-primary hover:bg-blue-700 dark:hover:bg-highlight transition-colors"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;