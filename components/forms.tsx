import React, { useCallback, useState } from 'react';
import type { Profile, Experience, Education, Project } from '../types';
import { ConfirmationModal } from './LoginModal';

// Reusable input component
const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input
        {...props}
        className={`w-full bg-gray-100 dark:bg-primary/50 border border-gray-300 dark:border-border-color text-gray-800 dark:text-text-primary rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:focus:ring-accent focus:border-blue-500 dark:focus:border-accent transition-colors ${props.className || ''}`}
    />
);

const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
    <textarea
        {...props}
        className="w-full bg-gray-100 dark:bg-primary/50 border border-gray-300 dark:border-border-color text-gray-800 dark:text-text-primary rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:focus:ring-accent focus:border-blue-500 dark:focus:border-accent transition-colors"
    />
);

const FormSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="border border-gray-200/80 dark:border-border-color/50 bg-gray-50/50 dark:bg-primary/20 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-accent mb-4">{title}</h3>
        <div className="space-y-4">{children}</div>
    </div>
);


// Profile Form
export const ProfileForm: React.FC<{ data: Profile; onChange: (data: Profile) => void; }> = ({ data, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange({ ...data, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                onChange({ ...data, imageUrl: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLinkChange = (index: number, field: 'name' | 'url', value: string) => {
        const newLinks = [...(data.links || [])];
        newLinks[index] = { ...newLinks[index], [field]: value };
        onChange({ ...data, links: newLinks });
    };

    const handleAddLink = () => {
        const newLinks = [...(data.links || []), { name: '', url: '' }];
        onChange({ ...data, links: newLinks });
    };

    const handleRemoveLink = (index: number) => {
        const newLinks = (data.links || []).filter((_, i) => i !== index);
        onChange({ ...data, links: newLinks });
    };

    return (
        <FormSection title="Profile">
             <div className="flex items-center space-x-6">
                <img src={data.imageUrl || 'https://via.placeholder.com/100'} alt="Profile Preview" className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 dark:border-border-color transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md cursor-pointer" />
                <div className="flex-grow">
                    <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Profile Picture:</label>
                    <input id="imageUpload" name="imageUpload" type="file" accept="image/*" onChange={handleImageChange} className="block w-full text-sm text-gray-600 dark:text-text-secondary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-800 hover:file:bg-gray-300 dark:file:bg-accent dark:file:text-primary dark:hover:file:bg-highlight mt-1" />
                </div>
            </div>
            <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Name: <Input name="name" value={data.name} onChange={handleChange} /></label>
            <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Title: <Input name="title" value={data.title} onChange={handleChange} /></label>
            <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Location: <Input name="location" value={data.location} onChange={handleChange} /></label>
            <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Email: <Input name="email" type="email" value={data.email} onChange={handleChange} /></label>
            <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Phone: <Input name="phone" type="tel" value={data.phone} onChange={handleChange} /></label>
            <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Summary: <TextArea name="summary" value={data.summary} onChange={handleChange} rows={3} /></label>
        
            <div className="pt-4 mt-4 border-t border-gray-200/80 dark:border-border-color/50">
                <h4 className="text-md font-semibold text-gray-700 dark:text-text-primary mb-3">Social Links</h4>
                <div className="space-y-3">
                    {(data.links || []).map((link, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <Input 
                                placeholder="Name (e.g., GitHub)" 
                                value={link.name} 
                                onChange={(e) => handleLinkChange(index, 'name', e.target.value)}
                                className="w-1/3"
                                aria-label={`Link name ${index + 1}`}
                            />
                            <Input 
                                placeholder="URL" 
                                value={link.url}
                                onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                                className="flex-grow"
                                aria-label={`Link URL ${index + 1}`}
                            />
                             <button
                                type="button"
                                onClick={() => handleRemoveLink(index)}
                                className="bg-red-600 text-white w-6 h-6 flex-shrink-0 flex items-center justify-center text-sm rounded-full hover:bg-red-700 transition-colors"
                                aria-label={`Remove link ${index + 1}`}
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
                 <button
                    type="button"
                    onClick={handleAddLink}
                    className="mt-3 bg-gray-800 text-white dark:bg-accent dark:text-primary px-3 py-1.5 rounded-md font-semibold hover:bg-gray-600 dark:hover:bg-highlight transition-colors text-xs"
                >
                    Add Link
                </button>
            </div>
        </FormSection>
    );
};

// Generic Dynamic Form Component
interface DynamicFormProps<T> {
    data: T[];
    onChange: (data: T[]) => void;
    renderItem: (item: T, index: number, handleChange: (index: number, updatedItem: T) => void) => React.ReactNode;
    getNewItem: () => T;
    title: string;
}

const DynamicForm = <T extends {}>({ data, onChange, renderItem, getNewItem, title }: DynamicFormProps<T>) => {
    const singularTitle = title.endsWith('s') ? title.slice(0, -1) : title;
    
    const [modalState, setModalState] = useState<{ isOpen: boolean; index: number | null }>({
        isOpen: false,
        index: null,
    });

    const handleItemChange = useCallback((index: number, updatedItem: T) => {
        const newData = [...data];
        newData[index] = updatedItem;
        onChange(newData);
    }, [data, onChange]);

    const handleAddItem = useCallback(() => {
        onChange([...data, getNewItem()]);
    }, [data, onChange, getNewItem]);

    const handleRemoveItemClick = (index: number) => {
        setModalState({ isOpen: true, index });
    };

    const handleConfirmRemove = () => {
        if (modalState.index !== null) {
            onChange(data.filter((_, i) => i !== modalState.index));
        }
    };
    
    const closeModal = () => {
        setModalState({ isOpen: false, index: null });
    };


    return (
        <FormSection title={title}>
            {data.map((item, index) => (
                <div key={index} className="border-b border-gray-200/80 dark:border-border-color/50 pb-4 mb-4 relative pr-8">
                    {renderItem(item, index, handleItemChange)}
                    <button
                        onClick={() => handleRemoveItemClick(index)}
                        className="absolute top-0 right-0 bg-red-600 text-white w-6 h-6 flex items-center justify-center text-sm rounded-full hover:bg-red-700"
                        aria-label={`Remove ${singularTitle} ${index + 1}`}
                    >
                        &times;
                    </button>
                </div>
            ))}
            <button
                onClick={handleAddItem}
                className="bg-gray-800 text-white dark:bg-accent dark:text-primary px-4 py-2 rounded-md font-semibold hover:bg-gray-600 dark:hover:bg-highlight transition-colors text-sm"
            >
                Add {singularTitle}
            </button>
            <ConfirmationModal
                isOpen={modalState.isOpen}
                onClose={closeModal}
                onConfirm={handleConfirmRemove}
                title={`Confirm Deletion`}
                message={`Are you sure you want to remove this ${singularTitle.toLowerCase()}?`}
                confirmText="Delete"
                confirmButtonVariant="danger"
            />
        </FormSection>
    );
};


// Experience Form
export const ExperienceForm: React.FC<{ data: Experience[]; onChange: (data: Experience[]) => void; }> = ({ data, onChange }) => {
    const renderExperienceItem = (item: Experience, index: number, handleChange: (index: number, updatedItem: Experience) => void) => {
         const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            handleChange(index, { ...item, [e.target.name]: e.target.value });
        };
        const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            handleChange(index, {...item, description: e.target.value.split('\n')})
        }
        return (
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Role: <Input name="role" value={item.role} onChange={handleInputChange} /></label>
                <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Company: <Input name="company" value={item.company} onChange={handleInputChange} /></label>
                <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Period: <Input name="period" value={item.period} onChange={handleInputChange} /></label>
                <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Location: <Input name="location" value={item.location} onChange={handleInputChange} /></label>
                <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Description (one per line): <TextArea name="description" value={item.description.join('\n')} onChange={handleDescriptionChange} rows={4} /></label>
            </div>
        );
    };
    return <DynamicForm data={data} onChange={onChange} renderItem={renderExperienceItem} getNewItem={() => ({ role: '', company: '', period: '', location: '', description: [] })} title="Experience" />;
};


// Education Form
export const EducationForm: React.FC<{ data: Education[]; onChange: (data: Education[]) => void; }> = ({ data, onChange }) => {
    const renderEducationItem = (item: Education, index: number, handleChange: (index: number, updatedItem: Education) => void) => {
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(index, { ...item, [e.target.name]: e.target.value });
        };
        return (
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Degree: <Input name="degree" value={item.degree} onChange={handleInputChange} /></label>
                <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Institution: <Input name="institution" value={item.institution} onChange={handleInputChange} /></label>
                <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Period: <Input name="period" value={item.period} onChange={handleInputChange} /></label>
                <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Details: <Input name="details" value={item.details || ''} onChange={handleInputChange} /></label>
            </div>
        );
    };
    return <DynamicForm data={data} onChange={onChange} renderItem={renderEducationItem} getNewItem={() => ({ degree: '', institution: '', period: '', details: '' })} title="Education" />;
};


// Projects Form
export const ProjectsForm: React.FC<{ data: Project[]; onChange: (data: Project[]) => void; }> = ({ data, onChange }) => {
    const renderProjectItem = (item: Project, index: number, handleChange: (index: number, updatedItem: Project) => void) => {
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            handleChange(index, { ...item, [e.target.name]: e.target.value });
        };
         const handleTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(index, {...item, technologies: e.target.value.split(',').map(t => t.trim())})
        }
        const handleFeaturesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            handleChange(index, {...item, features: e.target.value.split('\n')})
        }
        return (
            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Name: <Input name="name" value={item.name} onChange={handleInputChange} /></label>
                <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Image URL: <Input name="imageUrl" value={item.imageUrl} onChange={handleInputChange} /></label>
                <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Description: <TextArea name="description" value={item.description} onChange={handleInputChange} rows={3} /></label>
                <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Key Features (one per line): <TextArea name="features" value={item.features.join('\n')} onChange={handleFeaturesChange} rows={3} /></label>
                <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Technologies (comma-separated): <Input name="technologies" value={item.technologies.join(', ')} onChange={handleTechChange} /></label>
                <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">Link: <Input name="link" value={item.link || ''} onChange={handleInputChange} /></label>
            </div>
        );
    };
    return <DynamicForm data={data} onChange={onChange} renderItem={renderProjectItem} getNewItem={() => ({ name: '', description: '', technologies: [], features:[], imageUrl: '', link: '' })} title="Projects" />;
};


// Skills Form
export const SkillsForm: React.FC<{ data: string[]; onChange: (data: string[]) => void; }> = ({ data, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value.split(',').map(s => s.trim()));
    };

    return (
        <FormSection title="Skills">
            <label className="block text-sm font-medium text-gray-600 dark:text-text-secondary">
                Skills (comma-separated):
                <Input value={data.join(', ')} onChange={handleChange} />
            </label>
        </FormSection>
    );
};