import NavbarLink from "./nav_bar_link";

interface NavbarProperties {
  section: string;
}

const Navbar = (props: NavbarProperties) => {
  return (
    <div className="navbar">
      <NavbarLink name="ExerciseTracker" link="" section={props.section} />
      <NavbarLink name="User" link="user" section={props.section} />
      <NavbarLink name="Exercise" link="exercise" section={props.section} />
    </div>
  );
};

export default Navbar;
