const HeaderMenu = ({ mobile = false }) => {
  return (
    <ul
      className={
        mobile
          ? "z-10 absolute left-0 top-16 flex flex-col w-full shadow p-5 gap-4 "
          : `flex items-center gap-4`
      }
    >
      <a href="#" className={mobile ? "header--link__mobile" : "header--link"}>
        Home
      </a>
      <a href="#" className={mobile ? "header--link__mobile" : "header--link"}>
        For you
      </a>
      <a href="#" className={mobile ? "header--link__mobile" : "header--link"}>
        Browse All Categories
      </a>
      <a href="#" className={mobile ? "header--link__mobile" : "header--link"}>
        Join us
      </a>
    </ul>
  );
};

export default HeaderMenu;
