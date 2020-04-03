/* --- Global --- */

/* --- Local --- */

/**
 * @name RegionTop
 * @description Top region for the Dashboard template.
 */
export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Atom.Flex>
        <Molecule.Link to="/">
          <Atom.Span>Home</Atom.Span>
        </Molecule.Link>
      </Atom.Flex>

      {/* Menu */}
      <Atom.Flex alignCenter ml={4}></Atom.Flex>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter></Atom.Flex>
  </Atom.Flex>
);
