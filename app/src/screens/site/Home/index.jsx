/* --- Sub-Components --- */

const HomePage = props => {
  return (
    <Atom.Box>
      <Showcase />
    </Atom.Box>
  );
};

const Showcase = props => {
  return (
    <Atom.Flex center column sx={{height: '100%'}}>
      <Atom.Container sx={{maxWidth: ['100%', '100%', 880, 1080]}}>
        <Atom.Flex column>
          <Atom.Flex center column>
            <Atom.Heading mega>horizin</Atom.Heading>
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};

export default HomePage;
