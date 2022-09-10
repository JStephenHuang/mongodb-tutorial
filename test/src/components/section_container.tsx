interface SectionContainerProperties {
  children: React.ReactNode;
}

const SectionContainer = (props: SectionContainerProperties) => {
  return <div className="section">{props.children}</div>;
};

export default SectionContainer;
