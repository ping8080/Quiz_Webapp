import React from 'react';
import { CategoryListView } from './CategoryListView';

interface TestsViewProps {
  isPremium: boolean;
  onStartTest: (categoryId: string) => void;
  telegramUserId?: string;
}

export const TestsView: React.FC<TestsViewProps> = ({
  isPremium,
  onStartTest,
  telegramUserId
}) => {
  return (
    <CategoryListView
      isPremium={isPremium}
      onSelectCategory={onStartTest}
      telegramUserId={telegramUserId}
    />
  );
};