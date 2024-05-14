import { useState, useEffect } from 'react';
import './App.css';

const useStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key) || sessionStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  useEffect(() => {
    const storage = localStorage[key] ? localStorage : sessionStorage;
    storage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

const Task = () => {
  const [inputValue, setInputValue] = useStorage('inputValue', '');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default Task;
