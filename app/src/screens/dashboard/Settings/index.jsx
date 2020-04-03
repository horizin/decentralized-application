/* --- Local --- */
import {FormSettings} from '@forms';

/**
 * @name SettingsScreen
 * @description Generic settings screen
 */
const SettingsScreen = props => (
  <Atom.Flex column sx={{p: 4}}>
    <Atom.Heading>Settings</Atom.Heading>
    <FormSettings />
  </Atom.Flex>
);

export default SettingsScreen;
