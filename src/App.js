import React from 'react';
import './style.css';
import { useTheme } from './context';

export default function App() {
  const { theme, Themetoggle } = useTheme();
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <div>
        <label>Theme</label>
        <input type="checkbox" value={theme === 'Dark'} onClick={Themetoggle} />
      </div>
    </div>
  );
}
