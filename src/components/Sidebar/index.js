import "./Sidebar.scss";
import {
  FiBriefcase,
  FiCodepen,
  FiCoffee,
  FiFileText,
  FiFilm,
  FiHome,
  FiSmartphone,
  FiTruck,
  FiUsers,
  FiWatch,
} from "react-icons/fi";
import { Container } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="w-25 p-3 mt-3 d-inline-block">
      <span className="">دسته ها</span>
      <ul>
        <li>
          <FiHome className="m-3" />
          <span>املاک</span>
        </li>
        <li>
          <FiTruck className="m-3" />
          <span>وسایل نقلیه</span>
        </li>
        <li>
          <FiSmartphone className="m-3" />
          <span>کالای دیجیتال</span>
        </li>
        <li>
          <FiCoffee className="m-3" />
          <span>خانه و آشپزخانه</span>
        </li>
        <li>
          <FiFileText className="m-3" />
          <span>خدمات</span>
        </li>
        <li>
          <FiWatch className="m-3" />
          <span>وسایل شخصی</span>
        </li>
        <li>
          <FiFilm className="m-3" />
          <span>سرگرمی و فراغت</span>
        </li>
        <li>
          <FiUsers className="m-3" />
          <span>اجتماعی</span>
        </li>
        <li>
          <FiCodepen className="m-3" />
          <span>تجهیزات و صنعتی</span>
        </li>
        <li>
          <FiBriefcase className="m-3" />
          <span>استخدام و کاریابی</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
