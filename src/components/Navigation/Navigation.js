// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
//
// const Navigation = () => {
//   return (
//     <nav>
//       <Link to="/about">About</Link>{' '}
//     </nav>
//   );
// };
// якщо б ми просто написали тег лінк, то у нас би була перезагрузка сторінка. Тому ми виеористовуємо компонент Лінк, який обгортує ссілку і
//  , який під капотом не перегружає сторінку, а просто домальовує на ніцй щось, добавляє запис в  історію,
// коли змінюється адресна строка.
// <nav>Навігація</nav>;
// обертаємо в Лінк, але Лінка не можливо стилізувати, наприклад, не можна виділити кольором, якшо ссілка ативна,
// тому ми використовуємо НавЛінк - я замінила Лінк на НавЛінк(імпортувала цого зверху)
// у Навлінка е додаткові пропси, а саме - Класснейм і АктивКласснейм
// activeClassName виділяє клас, який співпадає з шляхом, який починається на слеш /, а це не зручно, тому що головна завжди  починається на слеш і буде виділена.
// тому є проп екзект - по якому іде точне порівняння, щоб шлях що вказано в ТУ,  повністю співпадав з адресною строкою, ,наприклад - /authors,
// ставимо екзект в головну, щоб активклас примінявся лише тоді, коли шлях співпадає в адресною строкою, точно співпадають.
const Navigation = () => (
  // якщо не писати всередині ретурн, то використовуемо круглі скобки, бо це те що повертає стрілочна функція.
  <nav>
    <NavLink to="/" className="link">
      {/* <NavLink to="/" className="link" activeClassName="activeLink" exact></NavLink> */}
      HomeView
    </NavLink>
    {/* <NavLink to="/movies" className="link" activeClassName="activeLink"></NavLink> */}
    <NavLink to="/movies" className="link">
      Movies
    </NavLink>
  </nav>
);

export default Navigation;

// const Navigation = () => (
//   <nav>
//     <NavLink
//       exact
//       to="/"
//       className={styles.link}
//       activeClassName={styles.activeLink}
//     >
//       Главная
//     </NavLink>

//     <NavLink
//       to="/authors"
//       className={styles.link}
//       activeClassName={styles.activeLink}
//     >
//       Авторы
//     </NavLink>

//     <NavLink
//       to="/books"
//       className={styles.link}
//       activeClassName={styles.activeLink}
//     >
//       Книги
//     </NavLink>
//   </nav>
// );

// export default Navigation;
