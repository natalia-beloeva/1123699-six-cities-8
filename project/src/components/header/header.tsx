import Logo from '../logo/logo';

type HeaderProps = {
  isMainPage: boolean;
  isLoginPage: boolean;
}

function Header({isMainPage, isLoginPage}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isMainPage={isMainPage} />
          </div>
          {!isLoginPage &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;