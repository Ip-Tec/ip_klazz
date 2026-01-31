'use client';

import { useAuth } from '@/app/context/AuthContext';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { 
  FolderIcon, 
  DocumentTextIcon, 
  ChevronRightIcon, 
  ArrowPathIcon,
  CheckIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

export default function AdminDashboard() {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const router = useRouter();
  
  const [files, setFiles] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isReadLoading, setIsReadLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      router.push('/admin/login');
    } else if (user && isAdmin) {
      fetchFiles();
    }
  }, [user, isAdmin, authLoading]);

  const fetchFiles = async () => {
    const token = await auth.currentUser?.getIdToken();
    const res = await fetch('/api/admin/list-notes', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    if (data.files) setFiles(data.files);
  };

  const loadFile = async (path: string) => {
    setIsReadLoading(true);
    setSelectedFile(path);
    const token = await auth.currentUser?.getIdToken();
    const res = await fetch(`/api/admin/read-note?path=${encodeURIComponent(path)}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setContent(data.content || '');
    setIsReadLoading(false);
  };

  const handleSave = async () => {
    if (!selectedFile) return;
    setIsSaving(true);
    setMessage({ type: '', text: '' });
    
    const token = await auth.currentUser?.getIdToken();
    const res = await fetch('/api/admin/save-note', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify({ filePath: selectedFile, content })
    });
    
    if (res.ok) {
        setMessage({ type: 'success', text: 'Saved successfully!' });
    } else {
        setMessage({ type: 'error', text: 'Failed to save.' });
    }
    setIsSaving(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/admin/login');
  };

  if (authLoading) return <div className="p-20 text-center">Checking Authentication...</div>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col pt-16">
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 px-8 py-4 flex justify-between items-center fixed top-0 w-full z-20">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <FolderIcon className="w-6 h-6 text-orange-400" /> Klazz Content Manager
        </h1>
        <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</span>
            <button
                onClick={handleLogout}
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold transition-all"
            >
                Logout
            </button>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <div className="w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto p-4">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Markdown Files</h2>
          <div className="space-y-1">
            {files.map(file => (
              <button
                key={file}
                onClick={() => loadFile(file)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${
                  selectedFile === file 
                  ? 'bg-orange-400/10 text-orange-500 border border-orange-400/20' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <DocumentTextIcon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{file}</span>
                {selectedFile === file && <ChevronRightIcon className="w-3 h-3 ml-auto text-orange-400" />}
              </button>
            ))}
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-950 p-6 overflow-hidden">
          {selectedFile ? (
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl flex-1 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-900/50">
                <div>
                   <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">Editing File</span>
                   <code className="text-sm font-bold text-gray-900 dark:text-white">{selectedFile}</code>
                </div>
                <div className="flex items-center gap-4">
                    {message.text && (
                        <span className={`text-sm flex items-center gap-1 ${message.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                            {message.type === 'success' ? <CheckIcon className="w-4 h-4" /> : <ExclamationCircleIcon className="w-4 h-4" />}
                            {message.text}
                        </span>
                    )}
                    <button
                        onClick={handleSave}
                        disabled={isSaving || isReadLoading}
                        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-6 py-2 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
                    >
                        {isSaving ? <ArrowPathIcon className="w-5 h-5 animate-spin" /> : 'Save Changes'}
                    </button>
                </div>
              </div>
              
              <div className="flex-1 relative">
                {isReadLoading && (
                    <div className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center">
                        <ArrowPathIcon className="w-10 h-10 animate-spin text-orange-400" />
                    </div>
                )}
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full h-full p-8 font-mono text-sm bg-transparent text-gray-900 dark:text-gray-100 resize-none focus:outline-none"
                    spellCheck={false}
                    disabled={isReadLoading}
                />
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400 flex-col gap-4">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-full shadow-lg">
                    <DocumentTextIcon className="w-16 h-16 text-gray-300" />
                </div>
                <p className="text-lg font-medium">Select a file from the sidebar to start editing</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
