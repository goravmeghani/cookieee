const CookieFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 text-sm md:text-base ${
            selectedCategory === category
              ? 'bg-primary text-secondary shadow-md'
              : 'bg-secondary text-text hover:bg-primary/20'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CookieFilter;
