/**
 * @name RegionTopDashboard
 * @description Default top region for dashboard template.
 */
/* --- Global --- */
import {ColorMode} from '@components';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Atom.Flex>
        <ColorMode />
      </Atom.Flex>

      {/* Menu */}
      <Atom.Flex alignCenter ml={4}></Atom.Flex>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter></Atom.Flex>
  </Atom.Flex>
);
