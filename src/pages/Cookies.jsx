import { useState } from 'react';
import AnimatedPage from '../components/common/AnimatedPage';
import CookieGrid from '../components/cookies/CookieGrid';
import CookieFilter from '../components/cookies/CookieFilter';
import { cookies } from '../data/cookies';

const Cookies = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(cookies.map(c => c.category))];

  const filteredCookies = selectedCategory === 'All'
    ? cookies
    : cookies.filter(cookie => cookie.category === selectedCategory);

  return (
    <AnimatedPage>
      <div className="container-padding mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl text-primary">Our Cookie Collection</h1>
          <p className="text-xl mt-2">Find your new favorite treat.</p>
        </div>
        
        <CookieFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        <CookieGrid cookies={filteredCookies} />
      </div>
    </AnimatedPage>
  );
};

export default Cookies;
