import * as S from './styles'

function Header({ isShowSidebar, setIsShowSidebar }) {
  return (
    <S.Header>
      <button
        className="toggle-sidebar"
        onClick={() => setIsShowSidebar(!isShowSidebar)}
      >
        Show/Hide
      </button>
      Header
    </S.Header>
  );
}

export default Header;