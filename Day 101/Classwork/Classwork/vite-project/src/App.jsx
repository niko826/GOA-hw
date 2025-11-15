import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform transition-all hover:scale-105">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-lg">
            T
          </div>
        </div>
        
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
          კეთილი იყოს თქვენი მობრძანება!
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Tailwind CSS React-ში – სწრაფი, ლამაზი, მარტივი.
        </p>

        <div className="space-y-4">
          <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-3 rounded-xl shadow-md transition-all transform hover:-translate-y-1">
            დაწყება
          </button>
          <button className="w-full border-2 border-gray-300 text-gray-700 font-medium py-3 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all">
            მეტის გაგება
          </button>
        </div>

        <div className="mt-8 flex justify-around text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            უფასო
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            სწრაფი
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            ლამაზი
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;