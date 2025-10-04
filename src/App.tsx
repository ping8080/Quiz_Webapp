import React, { useState, useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import { useAuth } from './hooks/useAuth';
import { Navigation } from './components/Navigation';
import { HomeView } from './components/HomeView';
import { TestsView } from './components/TestsView';
import { CategoryListView } from './components/CategoryListView';
import { SubcategoryListView } from './components/SubcategoryListView';
import { AccountView } from './components/AccountView';
import { TestApp } from './components/TestApp';
import { LoadingSpinner } from './components/LoadingSpinner';
import { 
  AlertTriangle
} from 'lucide-react';

function App() {
  const { user, isReady } = useTelegram();
  const { profile, loading, isPremium, refreshProfile } = useAuth(user);
  const [currentView, setCurrentView] = useState<'home' | 'tests' | 'categories' | 'subcategories' | 'account' | 'test' | 'results'>('home');
  const [selectedTestCategory, setSelectedTestCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await refreshProfile();
    setTimeout(() => setRefreshing(false), 1000);
  };

  const handleStartTest = (categoryId: string, subcategoryId?: string) => {
    setSelectedTestCategory(categoryId);
    if (subcategoryId) {
      setSelectedSubcategory(subcategoryId);
      setCurrentView('test');
    } else {
      setCurrentView('categories');
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedTestCategory(categoryId);
    setCurrentView('subcategories');
  };

  const handleSelectSubcategory = (subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId);
    setCurrentView('test');
  };

  const handleBackToTests = () => {
    setSelectedTestCategory(null);
    setSelectedSubcategory(null);
    setCurrentView('tests');
  };

  const handleBackToCategories = () => {
    setSelectedSubcategory(null);
    setCurrentView('categories');
  };

  const handleBackToSubcategories = () => {
    setCurrentView('subcategories');
  };

  const handleBackToHome = () => {
    setSelectedTestCategory(null);
    setSelectedSubcategory(null);
    setCurrentView('home');
  };

  useEffect(() => {
    // Update document title based on premium status
    document.title = `Nursing App ${isPremium ? '👑 Premium' : '🔒 Free'}`;
  }, [isPremium]);

  // Show loading while initializing
  if (!isReady || loading) {
    return <LoadingSpinner />;
  }

  // Show error if no user data
  if (!user || !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Access Restricted
          </h2>
          <p className="text-gray-600 mb-4">
            This app can only be accessed through Telegram Mini Apps.
          </p>
          <p className="text-sm text-gray-500">
            Please open this app from the official Telegram bot.
          </p>
        </div>
      </div>
    );
  }

  // Show test interface
  if (currentView === 'test' && selectedTestCategory && selectedSubcategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <TestApp
            categoryId={selectedTestCategory}
            subcategoryId={selectedSubcategory}
            isPremium={isPremium}
            onBack={handleBackToSubcategories}
            onHome={handleBackToHome}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Navigation */}
        <Navigation
          currentView={currentView}
          onViewChange={setCurrentView}
          isPremium={isPremium}
        />

        {/* Content based on current view */}
        {currentView === 'home' && (
          <HomeView
            profile={profile}
            isPremium={isPremium}
            onStartTest={handleSelectCategory}
            onRefresh={handleRefresh}
            refreshing={refreshing}
          />
        )}

        {currentView === 'tests' && (
          <TestsView
            isPremium={isPremium}
            onStartTest={handleSelectCategory}
            telegramUserId={profile?.telegram_user_id}
          />
        )}

        {currentView === 'categories' && (
          <CategoryListView
            isPremium={isPremium}
            onSelectCategory={handleSelectCategory}
            telegramUserId={profile?.telegram_user_id}
          />
        )}

        {currentView === 'subcategories' && selectedTestCategory && (
          <SubcategoryListView
            categoryId={selectedTestCategory}
            isPremium={isPremium}
            onSelectSubcategory={handleSelectSubcategory}
            onBack={handleBackToCategories}
            telegramUserId={profile?.telegram_user_id}
          />
        )}

        {currentView === 'account' && (
          <AccountView
            profile={profile}
            isPremium={isPremium}
            onRefresh={handleRefresh}
            refreshing={refreshing}
          />
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>© 2025 Nursing App • Powered by All Nursing Help ♥️</p>
          <p className="mt-2 text-xs">
            <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent font-bold">
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;