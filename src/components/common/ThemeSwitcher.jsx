import { useTheme } from '../../hooks/useTheme';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useTheme();

  const themes = [
    { name: 'chocolate', color: 'bg-[#8a5a2b]' },
    { name: 'vanilla', color: 'bg-[#f2c97d]' },
    { name: 'strawberry', color: 'bg-[#f56a87]' },
  ];

  return (
    <div className="flex items-center space-x-2 p-1 rounded-full bg-secondary">
      {themes.map((t) => (
        <button
          key={t.name}
          onClick={() => changeTheme(t.name)}
          className={`w-6 h-6 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 focus:outline-none relative ${t.color}`}
          aria-label={`Switch to ${t.name} theme`}
        >
          {theme === t.name && (
            <motion.div
              layoutId="theme-indicator"
              className="absolute inset-0 border-2 border-background rounded-full"
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
