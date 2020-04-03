/* --- Global --- */
import {ColorMode} from '@components';

/**
 * @name RegionHeader
 * @description Top region for the Dashboard template.
 */
export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Atom.Flex>
        <Atom.Heading sx={{mr: 3, mb: 0}}>{GLOBAL.siteName}</Atom.Heading>
      </Atom.Flex>

      {/* Menu */}
      <Atom.Flex alignCenter ml={4}></Atom.Flex>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter>
      <Molecule.Menu
        sx={{
          m: 2,
          mx: 3,
        }}
        items={[
          {
            label: 'Dashboard',
            to: '/dashboard',
          },
        ]}
      />
      <ColorMode />
    </Atom.Flex>
  </Atom.Flex>
);
