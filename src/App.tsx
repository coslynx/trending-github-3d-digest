import React from 'react';
import MinimalLayout from 'src/components/layout/MinimalLayout.tsx';
import HomePage from 'src/pages/HomePage.tsx';

function App(): JSX.Element {
  try {
    return (
      <MinimalLayout>
        <HomePage />
      </MinimalLayout>
    );
  } catch (error: unknown) {
    console.error('Error rendering App:', error);
    let errorMessage = 'Failed to load the application.';
    if (error instanceof Error) {
      errorMessage = `Failed to load the application: ${error.message}`;
    }

    return (
      <div className="bg-dark-background text-light-text p-4">
        <h1>Error</h1>
        <p>{errorMessage}</p>
      </div>
    );
  }
}

export default App;