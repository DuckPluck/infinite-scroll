import { Link } from 'react-router-dom';


export const NoMatchPage = () => {
  return (
    <div>
      <Link to="/">
        Перейти к списку постов
      </Link>
    </div>
  );
};
