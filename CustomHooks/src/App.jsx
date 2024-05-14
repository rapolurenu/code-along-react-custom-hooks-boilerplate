import { useState, useEffect } from 'react';
import './App.css';

const useStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key) || sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    const storage = localStorage[key] ? localStorage : sessionStorage;
    storage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const MyComponent = () => {
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

export default MyComponent;
