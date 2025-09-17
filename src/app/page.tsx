'use client';

import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue.trim(),
          completed: false,
        },
      ]);
      setInputValue('');
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Todo App
        </h1>
        
        {/* Add Todo Input */}
        <div className="flex gap-3 mb-8">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new todo..."
            className="flex-1 px-5 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
          />
          <button
            onClick={addTodo}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-105 shadow-lg"
          >
            Add
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-between text-sm font-medium bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
          <span className="text-blue-600 dark:text-blue-400">
            <span className="font-bold text-lg">{activeTodos.length}</span> active
          </span>
          <span className="text-green-600 dark:text-green-400">
            <span className="font-bold text-lg">{completedTodos.length}</span> completed
          </span>
          <span className="text-purple-600 dark:text-purple-400">
            <span className="font-bold text-lg">{todos.length}</span> total
          </span>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No todos yet. Add one above!
              </p>
            </div>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all transform hover:scale-[1.02] ${
                  todo.completed
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-700/50'
                    : 'bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-750 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600'
                } shadow-sm hover:shadow-md`}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-5 h-5 text-blue-600 rounded-lg focus:ring-blue-500 transform scale-110"
                />
                <span
                  className={`flex-1 ${
                    todo.completed
                      ? 'line-through text-gray-500 dark:text-gray-400'
                      : 'text-gray-800 dark:text-white font-medium'
                  } text-lg`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all transform hover:scale-110"
                  aria-label="Delete todo"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Clear Completed Button */}
        {completedTodos.length > 0 && (
          <button
            onClick={() => setTodos(activeTodos)}
            className="w-full mt-6 px-6 py-3 text-sm font-medium text-red-600 dark:text-red-400 hover:text-white hover:bg-red-500 dark:hover:bg-red-600 border-2 border-red-300 dark:border-red-600 rounded-xl transition-all transform hover:scale-[1.02] shadow-sm hover:shadow-md"
          >
            Clear Completed ({completedTodos.length})
          </button>
        )}
      </div>
    </div>
  );
}
