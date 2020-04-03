import {RegionAside, RegionTop, RegionFooter} from '@regions';
import styles from './styles';

const DashboardTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <Atom.Flex column sx={styles.container}>
      <Atom.Flex sx={{flex: 1}}>
        <RegionAside sx={styles.aside} />
        <Atom.Flex column sx={styles.main}>
          <RegionTop />
          <Atom.Flex column sx={{flex: 1, ...sxMain}}>
            {children}
          </Atom.Flex>
          <RegionFooter />
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default DashboardTemplate;
