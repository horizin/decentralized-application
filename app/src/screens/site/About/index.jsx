import {Site} from '@templates';

/* --- Component --- */
export default () => (
  <Site
    sx={{bg: 'paper', color: 'text'}}
    sxMain={{alignItems: 'center', justifyContent: 'center'}}>
    <Atom.Container sx={{maxWidth: [1, 1, 780, 780]}}>
      <Atom.Box sx={{py: 3, textAlign: 'center'}}>
        <Atom.Heading giga>horizin</Atom.Heading>
        git clone git@github.com:rapid-eth/rapid-adventures
      </Atom.Box>
    </Atom.Container>
  </Site>
);
