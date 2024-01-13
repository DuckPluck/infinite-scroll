import { Link } from 'react-router-dom';


export const NoMatchPage = () => {
  return (
    <div>
      <div>
        404 страница не найдена
      </div>

      <Link to="/">
        Назад к списку постов
      </Link>
    </div>
  );
};
