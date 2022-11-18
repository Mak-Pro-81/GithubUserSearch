import { useEffect, useContext } from 'react';
import { StyledThemeSwitcher } from './styles';
import { ReactComponent as IconSun } from '../../assets/icons/icon-sun.svg';
import { ReactComponent as IconMoon } from '../../assets/icons/icon-moon.svg';
import { ThemeContext } from 'src/contexts';

export const ThemeSwitcher = () => {
  const themeCtx = useContext(ThemeContext);

  const { themeMode, toggleThemeMode } = themeCtx;

  const onChange = () => {
    toggleThemeMode();
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  return (
    <StyledThemeSwitcher onClick={onChange} mode={themeMode}>
      {themeMode === 'dark' ? 'light' : 'dark'}
      {themeMode === 'dark' ? <IconSun /> : <IconMoon />}
    </StyledThemeSwitcher>
  );
};
