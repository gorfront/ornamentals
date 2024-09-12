import "./SubCategories.scss";

interface SubCategoryProps {
  active: boolean;
  name: string;
  toggleActive: () => void;
}

const SubCategory: React.FC<SubCategoryProps> = ({
  active,
  name,
  toggleActive,
}) => {
  return (
    <li
      onClick={() => {
        toggleActive();
      }}
      className={
        active
          ? "subCategories--list--item subCategories--list--item--active"
          : "subCategories--list--item"
      }
    >
      {name}
    </li>
  );
};
export default SubCategory;
