# Proyecto 11 React Basics SPA Bob's Burgers
Single Page Application about the TV Show Bob's Burgers built with React, Vite and React Router.

## 📖 Description
- Explores all the charactes.
- Favorite system using localStorage so does not make too many request to API.
- Search bar of the characters in real time.
- Individual details of each character.
- Responsive design.
- React Router navigation.

## 🛠️ Technologies
- React - Main library.
- Vite - Build tool.
- React Router - Routing.
- Bob's Burgers API - Character's information.
- LocalStorage - Data persistance.
```
App.jsx:
// Inicializar favoritos desde localStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  //Guardar en localStorage cada vez que cambien los favoritos
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

Characters.jxs:
const [characters, setCharacters] = useState([]); // array de personajes
  const [loading, setLoading] = useState(true); // loading
  const [error, setError] = useState(null); // error
  const [searchTerm, setSearchTerm] = useState(""); // input

  useEffect(() => {
    const stored = localStorage.getItem("characters");
    if (stored) {
      setCharacters(JSON.parse(stored));
      setLoading(false);
    } else {
      fetch("https://bobsburgers-api.herokuapp.com/characters")
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data); // data es el array completo
          localStorage.setItem("characters", JSON.stringify(data));
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError("Failed to fetch characters");
          setLoading(false);
        });
    }
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
```

## 📦 Setting up
```bash
# Clone repository
git clone https://https://github.com/Ren-mayday/proyecto-11-react-basics-spa-bob-burgers.git

# Enter directory
cd proyecto-11-react-basics-spa-bob-burgers

# Install dependencies
npm install

# Start project
npm run dev
```

## 🗂️ Structure
```
proyecto-11-react-basics-spa-bob-burgers/
├── src/
│   ├── assets
│   ├── components
│   └── pages
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── public/
└── package.json
```

- pages/ - Page components (Home, Characters, CharacterDetail, Favorites, About, NotFound).
- components/ - Reusable components (Nav, CharacterCard, CharacterList, Tabs, Title).

## 🔗 Routes
- / - Home.
- /about - Information about the TV show and project.
- /characters - List of charactes.
- /characters/:id - Character details.
- /favorites - Favorite characters

## 📝 API
This projejct is obtaining all data from https://www.bobsburgersapi.com/.
