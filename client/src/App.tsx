import React, { useState } from 'react';
import CollaborativeEditor from './components/CollaborativeEditor';
import OnlineUsers from './components/OnlineUsers';

function App() {
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center">
      <header className="w-full py-6 px-4 bg-gray-800 shadow-md flex justify-between items-center">
        <h1 className="text-3xl font-bold">Collaborative Editor</h1>
        <OnlineUsers users={onlineUsers} />
      </header>

      <main className="flex-grow w-full max-w-4xl p-4">
        <CollaborativeEditor
          roomName="my-room"
          userName={`User-${Math.floor(Math.random() * 1000)}`}
          setOnlineUsers={setOnlineUsers}
        />
      </main>
    </div>
  );
}

export default App;
