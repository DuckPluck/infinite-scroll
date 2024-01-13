import { Route, Routes } from 'react-router-dom';
import { NoMatchPage } from './pages/NoMatchPage';
import { PostListPage } from './pages/PostListPage';
import { PostViewPage } from './pages/PostViewPage';


function App() {
  return (
    <Routes>
      <Route path="/infinite-scroll">
        <Route index element={<PostListPage />} />
        <Route path="/infinite-scroll/post/:id" element={<PostViewPage />} />
        <Route path="/infinite-scroll/*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
