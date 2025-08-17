import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <StyledLink to={to}>
      {children}
      {isActive && (
        <ActiveIndicator
          layoutId="activeIndicator"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30,
          }}
        />
      )}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  transition: color ${({ theme }) => theme.transitions.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default NavLink;
