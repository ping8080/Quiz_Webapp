import React from 'react';
import { Home, User, BookOpen } from 'lucide-react';

interface NavigationProps {
  currentView: 'home' | 'tests' | 'categories' | 'subcategories' | 'account' | 'test' | 'results';
  onViewChange: (view: 'home' | 'tests' | 'account') => void;
  isPremium: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentView,
  onViewChange,
  isPremium
}) => {
  const navItems = [
    {
      id: 'home' as const,
      label: 'Home',
      icon: Home,
      color: 'text-blue-600'
    },
    {
      id: 'tests' as const,
      label: 'Tests',
      icon: BookOpen,
      color: 'text-green-600'
    },
    {
      id: 'account' as const,
      label: 'My Account',
      icon: User,
      color: 'text-purple-600'
    }
  ];

  return (
    <nav className="bg-white shadow-lg rounded-xl p-4 mb-6">
      <div className="flex justify-center space-x-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`flex flex-col items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? `bg-blue-50 ${item.color}`
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium">{item.label}</span>
              {item.id === 'account' && isPremium && (
                <div className="w-2 h-2 bg-yellow-400 rounded-full -mt-1"></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};