/**
 * @function StorageDelete
 * @description Delete items from personal space.
 */
/* --- Global --- */
import dot from 'dot-prop-immutable-chain'
import React, { useEffect, useState } from 'react';
import { BoxInject } from '3box-ui-state'
import { Button } from '@horizin/design-system-atoms';
import BoxAccess from '../components/BoxAccess';


import { useSpaceReadyEffect } from './effects'
const StorageDelete = ({ box, ...props }) => {
  /* --- State --- */
  const [ isRequested, setIsRequested ] = useState(false)
  
  /* --- Handlers --- */
  const deleteRequestHandler = () => setIsRequested(true)
  
  /* --- Effects --- */

  const isSpaceReady = useSpaceReadyEffect(box, props)

  /**
   * @function deleteRequestEffect
   * @description Handle User Input Request
   */
  useEffect(() => {
    if (
      isRequested &&
      props.space && props.index && props.delta) {
      box.delete({
        address: props.address,
        space: props.space,
        access: props.access,
        index: props.index,
        key: props.delta,
      })
    }
  }, [isRequested, props.data])

  /* --- Component --- */
  return (
  props.children
  ? <Atom.Span onClick={deleteRequestHandler}>{props.children}</Atom.Span>
  : props.isClickToAccess
    ? (
      <CMS.AccessSpace
        spaceAuto
        level='space'
        space={props.space}
        componentIsLoggedOut={props.componentIsLoggedOut}
        componentIsLoading={props.componentIsLoading}
        componentIsLoggedIn={props.componentIsLoggedIn}
        >
          <Atom.Span onClick={deleteRequestHandler}>{props.componentIsSpaceOpen}</Atom.Span>
      </CMS.AccessSpace>
    )
    : isSpaceReady
    ? (
        <Atom.Span
          {...props.styledLablActive}
          onClick={deleteRequestHandler}>
          {props.componentIsSpaceOpen}
        </Atom.Span>
      )
      :(
        <>
          <Atom.Toast content={<DeleteAttemptMessage/>}>
            <Atom.Flex alignCenter>
              <Atom.Span
                {...props.styledLablLoading}
              >
                {props.isLoadingComponent}
              </Atom.Span>
            </Atom.Flex>
          </Atom.Toast>
        </>
    )
)}

const DeleteAttemptMessage = props =>
<Atom.Flex column>
  <Atom.Span xs mb={3}>Open Space to Complete Action</Atom.Span>
  <BoxAccess
    level='space'
    space={SPACE}
  />
</Atom.Flex>

StorageDelete.defaultProps = {
  isClickToAccess: true,
  componentIsLoggedOut: <Atom.Span pointer xxs tag='white' opacity={1}>Login <Atom.Span opacity={.6} pl={1} ><Atom.LoadingSquare /></Atom.Span></Atom.Span>,
  componentIsLoading: <Atom.Span pointer xxs tag='white' opacity={1} >Loading <Atom.Span pl={1}><Atom.LoadingSquare className='active' /></Atom.Span></Atom.Span>,
  componentIsLoggedIn: <Atom.Span pointer xxs tag='white' opacity={1} ><Atom.Span pl={1}><Atom.LoadingSquare className='active' /></Atom.Span></Atom.Span>,
  componentIsSpaceOpen: <Atom.Span pointer xxs tag='red' >Delete</Atom.Span>,
  access: 'public',
  spaceAuto: true,
  styledLablActive: {
    variant: 'red'
  },
  styledLablLoading: {
    variant: 'white'
  },
  styledLoading: {
    xs: true,
    variant: 'white'
  },
  styled: {
    xs: true,
    variant: 'red'
  }
}

StorageDelete.propTypes = {
  spaceAuto: PropTypes.bool
}


export default props =><BoxInject><StorageDelete {...props} /></BoxInject>
