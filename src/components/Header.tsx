import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useThemeStore } from "../store/themeStore";
import { FiSun, FiMoon } from "react-icons/fi";
import NavLink from "./NavLink";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const categories = [
    {
      name: "백엔드",
      subcategories: ["Spring", "Java"],
    },
    {
      name: "프론트엔드",
      subcategories: ["JavaScript", "TypeScript", "React", "React Native", "Flutter"],
    },
    {
      name: "데이터베이스",
      subcategories: ["RDBMS", "NoSQL"],
    },
  ];

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoLink to="/">Mimlog</LogoLink>
        <Nav>
          <NavList>
            <NavItem>
              <NavLink to="/">홈</NavLink>
            </NavItem>
            <NavItem
              onMouseEnter={() => setHoveredMenu("posts")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <NavLink to="/posts">게시글</NavLink>
              <DropdownMenu
                isOpen={hoveredMenu === "posts"}
                categories={categories}
              />
            </NavItem>
            <NavItem>
              <NavLink to="/profile">프로필</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/git">Git</NavLink>
            </NavItem>
          </NavList>
        </Nav>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </ThemeToggle>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  transition: all ${({ theme }) => theme.transitions.normal};
`;

const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes["md"]};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.normal};

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceHover};
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const Nav = styled.nav`
  flex: 1;
  margin: 0 ${({ theme }) => theme.spacing.xl};
`;

const NavList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  list-style: none;
`;

const NavItem = styled.li`
  position: relative;
`;

const ThemeToggle = styled.button`
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 50%;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    background-color: ${({ theme }) => theme.colors.surfaceHover};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Header;