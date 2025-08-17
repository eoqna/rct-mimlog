import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface Category {
  name: string;
  subcategories: string[];
}

interface DropdownMenuProps {
  isOpen: boolean;
  categories: Category[];
}

const DropdownMenu = ({ isOpen, categories }: DropdownMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <DropdownContainer
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {categories.map((category) => (
            <CategorySection key={category.name}>
              <CategoryTitle>{category.name}</CategoryTitle>
              <SubcategoryList>
                {category.subcategories.map((subcategory) => (
                  <SubcategoryItem key={subcategory}>
                    <Link to={`/posts/${category.name}/${subcategory}`}>
                      {subcategory}
                    </Link>
                  </SubcategoryItem>
                ))}
              </SubcategoryList>
            </CategorySection>
          ))}
        </DropdownContainer>
      )}
    </AnimatePresence>
  );
};

const DropdownContainer = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  min-width: 600px;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const CategorySection = styled.div`
  flex: 1;
`;

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 500;
`;

const SubcategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SubcategoryItem = styled.div`
  a {
    display: block;
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    transition: all ${({ theme }) => theme.transitions.normal};
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      background-color: ${({ theme }) => theme.colors.surfaceHover};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default DropdownMenu;
