/* --- Global Dependencies --- */
import React from 'react'
import { GenerateImage } from '../utilities'

export default props =>
<DID.Context>
  {
    box => (
    <Atom.Flex
      circle center column boxShadow={0} p={2}
      border="2px solid #FFF"
      overflow='hidden'
      width={48} height={48} maxWidth={48} maxWidth={48}
      {...props}
      >
        {
          box.profile && box.profile.image
          ? <Atom.BackgroundImage
            ratio={.5}
            circle
            src={GenerateImage(box.profile.image)} />
          : <Atom.BackgroundImage
            ratio={.5}
            circle
            src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' /> 
        }
    </Atom.Flex>
    )
  }
</DID.Context>