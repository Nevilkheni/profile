import ThemeSwitcher from "../components/themeSwitcher";

const MainLayout = ({ children }) => {
  return (
    <>
      <ThemeSwitcher />
      {children}
    </>
  );
};

export default MainLayout;
