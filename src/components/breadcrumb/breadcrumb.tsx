import Link from "next/link";
import { BreadcrumbsProps } from "./breadcrumb.type";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  datas,
  variant = "medium",
}) => {
  const variantSize = {
    small: "text-sm py-1",
    medium: "text-md py-2",
    large: "text-lg py-3",
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className={`flex space-x-2 ${variantSize[variant]}`}>
        {datas.map((item, index) => (
          <li key={index}>
            <Link legacyBehavior href={item.path}>
              <a className="text-black-500 ">{item.title}</a>
            </Link>
            {index < datas.length - 1 && <span className="mx-2">></span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;