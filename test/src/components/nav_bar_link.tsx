import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import DropdownMenu from "./dropdown_menu";

interface NavbarLinkProperties {
  name: string;
  link: string;
  section: string;
}

const NavbarLink = (props: NavbarLinkProperties) => {
  const [showDropdown, setshowDropdown] = useState<boolean>(false);
  if (props.section === props.link) {
    return (
      <Link
        className="navbar-link-active"
        to={`/${props.link}`}
        onMouseEnter={() => setshowDropdown(true)}
        onMouseLeave={() => setshowDropdown(false)}
      >
        {props.name}
        {showDropdown && <DropdownMenu section={props.link} />}
      </Link>
    );
  } else {
    return (
      <Link
        className="navbar-link"
        to={`/${props.link}`}
        onMouseEnter={() => setshowDropdown(true)}
        onMouseLeave={() => setshowDropdown(false)}
      >
        {props.name}
        {showDropdown && <DropdownMenu section={props.link} />}
      </Link>
    );
  }
};

export default NavbarLink;
