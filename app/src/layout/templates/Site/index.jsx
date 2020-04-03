import {RegionHeader, RegionFooter} from '@regions';

const SiteTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <Atom.Flex column sx={{minHeight: '100vh', flex: 1, ...sx}}>
      <RegionHeader />
      <Atom.Flex center column sx={{flex: 1, ...sxMain}}>
        {children}
      </Atom.Flex>
      <RegionFooter />
    </Atom.Flex>
  );
};

export default SiteTemplate;
