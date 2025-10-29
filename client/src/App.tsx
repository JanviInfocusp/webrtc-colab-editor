import React from 'react';
import CollaborativeEditor from './components/CollaborativeEditor';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center">
      <header className="w-full py-6 px-4 bg-gray-800 shadow-md text-center">
        <h1 className="text-3xl font-bold">Collaborative Editor</h1>
      </header>

      <main className="flex-grow w-full max-w-4xl p-4">
        <CollaborativeEditor
          roomName="my-room"
          userName={`User-${Math.floor(Math.random() * 1000)}`}
        />
      </main>
    </div>
  );
}

export default App;
