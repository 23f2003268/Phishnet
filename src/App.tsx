import React, { useState } from 'react';
import { Shield, Brain, AlertTriangle, BookOpen, ShieldCheck, Zap } from 'lucide-react';
import { ThemeProvider } from 'next-themes';
import { URLScanner } from './components/URLScanner';
import { SecurityQuiz } from './components/SecurityQuiz';
import { ThreatDashboard } from './components/ThreatDashboard';
import { SecurityGuide } from './components/SecurityGuide';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  const [activeTab, setActiveTab] = useState<'scanner' | 'quiz' | 'threats' | 'guide'>('scanner');

  const tabs = [
    { id: 'scanner', label: 'URL Scanner', icon: Shield },
    { id: 'quiz', label: 'Security Quiz', icon: Brain },
    { id: 'threats', label: 'Threat Dashboard', icon: AlertTriangle },
    { id: 'guide', label: 'Security Guide', icon: BookOpen },
  ] as const;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
        <header className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center gap-4 animate-fade-in">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-shift"></div>
                  <div className="relative flex items-center gap-2 bg-white dark:bg-black rounded-lg p-2 transition-colors duration-300">
                    <div className="relative">
                      <ShieldCheck className="w-8 h-8 text-blue-500" />
                      <Zap className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient-shift">
                    PhishNet
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">Advanced Threat Protection</p>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="border-b border-slate-200 dark:border-slate-700/50 transition-colors duration-300">
            <div className="flex space-x-8">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`
                    relative pb-4 px-3 border-b-2 font-medium text-sm flex items-center gap-2 transition-all duration-300
                    ${activeTab === id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 hover:border-blue-300 dark:hover:border-blue-700'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 transition-colors duration-300 ${activeTab === id ? 'text-blue-500 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`} />
                  {label}
                  {activeTab === id && (
                    <span className="absolute inset-0 bg-blue-400/10 rounded-lg animate-pulse-subtle"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700/50 animate-fade-in transition-colors duration-300">
            {activeTab === 'scanner' && <URLScanner />}
            {activeTab === 'quiz' && <SecurityQuiz />}
            {activeTab === 'threats' && <ThreatDashboard />}
            {activeTab === 'guide' && <SecurityGuide />}
          </div>
        </main>

        <footer className="mt-auto py-8 bg-white/30 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-700/50 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300 transition-colors duration-300">
              <ShieldCheck className="w-5 h-5" />
              <p className="text-sm">
                © {new Date().getFullYear()} PhishNet • Protecting Your Digital World
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;