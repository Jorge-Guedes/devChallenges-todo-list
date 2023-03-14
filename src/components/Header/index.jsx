import P from "prop-types";
import InputMenu from "../Form/InputMenu";
import styles from "./header.module.css";

const Header = ({ menu, onHandleMenu }) => {
  return (
    <header className={styles.header}>
      <h1>#todo</h1>
      <ul className={`container ${styles.header_menu}`}>
        <InputMenu value="all" menu={menu} onChange={onHandleMenu} />
        <InputMenu value="active" menu={menu} onChange={onHandleMenu} />
        <InputMenu value="completed" menu={menu} onChange={onHandleMenu} />
      </ul>
    </header>
  );
};

export default Header;

P.propTypes = {
  menu: P.string.isRequired,
  onHandleMenu: P.func.isRequired,
};
