// import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { LinkElem } from './Navigation.styled.js';
// import PageHeading from '../../components/PageHeading';

// якщо б ми просто написали тег лінк, то у нас би була перезагрузка сторінка. Тому ми виеористовуємо компонент Лінк, який обгортує ссілку і
//  , який під капотом не перегружає сторінку, а просто домальовує на ніцй щось, добавляє запис в  історію,
// коли змінюється адресна строка.
// <nav>Навігація</nav>;
// обертаємо в Лінк, але Лінка не можливо стилізувати, наприклад, не можна виділити кольором, якшо ссілка ативна,
// тому ми використовуємо НавЛінк - я замінила Лінк на НавЛінк(імпортувала цого зверху)
// у Навлінка е додаткові пропси, а саме - Класснейм і АктивКласснейм
// activeClassName виділяє клас, який співпадає з шляхом, який починається на слеш /, а це не зручно, тому що головна завжди  починається на слеш і буде виділена.
// ставимо екзект в головну, щоб активклас примінявся лише тоді, коли шлях співпадає в адресною строкою, точно співпадають.
const Navigation = () => (
  // якщо не писати всередині ретурн, то використовуемо круглі скобки, бо це те що повертає стрілочна функція.
  <nav>
    <LinkElem to="/">
      {/* <PageHeading text="HomeView" /> */}
      HomeView
    </LinkElem>

    <LinkElem to="/movies">
      {/* <PageHeading text="Movies" /> */}
      Movies
    </LinkElem>
  </nav>
);

export default Navigation;
