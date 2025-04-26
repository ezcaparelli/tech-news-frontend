import { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://tech-news-backend.onrender.com/api/news')
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tech News</h1>
      {news.map((item, index) => (
        <div key={index} className="mb-6">
          <a href={item.link} className="text-xl font-semibold text-blue-600" target="_blank" rel="noopener noreferrer">{item.title}</a>
          <p>{item.contentSnippet}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
