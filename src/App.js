import './App.css';
import events from './events.json';
import categories from './categories.json';
import EventList from './EventList';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';

function App() {

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [categoryList, setCategoryList] = useState([[...categories.map(c => c.value)]]);
  const [subCategories, setSubCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(categories);

  const combinedEvents = [...events.byuCalendarEvents, ...events.BYUSA];
  combinedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

  useEffect(() => {
    if (currentCategory) {
      const specificCategory = currentCategory.value;
      const filteredEvents = combinedEvents.filter((event) => 
        event.tags && event.tags.includes(specificCategory)
      );
      setFilteredEvents(filteredEvents);
    } else {
      setFilteredEvents(combinedEvents);
    }
  }, [currentCategory]);

  useEffect(() => {
    let currCategory = categories;
    const categoryList = [currCategory.map(c => c.value)];
    for (let index of selectedCategory.slice(0, selectedCategory.length - 1)) {
      currCategory = currCategory[index];
      if (currCategory.subCategories) {
        categoryList.push(currCategory.subCategories.map(c => c.value));
      }
    }
    setCategoryList(categoryList);
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory.length === 0) {
      setCurrentCategory(null);
    } else {
      let currCategory = { subCategories: categories }
      for (let index of selectedCategory) {
        currCategory = currCategory.subCategories[index];
      }
      setCurrentCategory(currCategory);
    }
  }, [selectedCategory]);

  useEffect(() => {
    setSubCategories((currentCategory && currentCategory.subCategories) ? currentCategory.subCategories.map(c => c.value) : []);
  }, [currentCategory]);

  const selectCategory = (level) => (category) => {
    setSelectedCategory((selectedCategory) => {
      if (selectedCategory.length === level) {
        return [...selectedCategory, category];
      } else if (category === selectedCategory[level]) { // If the user clicks on the same category, deselect it
        return selectedCategory.slice(0, level);
      } else if (selectedCategory.length > level) {
        return selectedCategory.slice(0, level).concat(category);
      } else {
        return selectedCategory;
      }
    });
  }

  return (
    <div className="App">
      <div className='top-nav'>
        { categoryList.map((category, index) => (
          <NavBar
            key={index}
            items={category}
            mainBar={index === 0}
            handleNavItemClick={selectCategory(index)}
            selectedItem={selectedCategory[index]}
          />
        ))}
        { subCategories.length > 0 && (
          <NavBar
            items={subCategories}
            handleNavItemClick={selectCategory(selectedCategory.length)}
          />
        )}
      </div>
      <EventList events={filteredEvents} />
    </div>
  );
}

export default App;
