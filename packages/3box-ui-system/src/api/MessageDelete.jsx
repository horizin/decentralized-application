/**
 * @function MessageDelete
 * @description Manage thread post delete request
 * @version 1.0.0
 */

/* --- Global --- */
import React, { useEffect, useState } from 'react';
import { BoxInject } from '3box-ui-state'
import BoxAccess from '../components/BoxAccess';
import { useSpaceReadyEffect, useThreadReadyEffect } from './effects'

const MessageDelete = ({ box, ...props }) => {
  /* --- State --- */
  const [ isRequested, setIsRequested ] = useState(false)
  
  /* --- Handlers --- */
  const deleteRequestHandler = () => setIsRequested(true)
  
  /* --- Effects --- */
  useEffect( () => { 
    if(isRequested) {
      box.threadPostDelete({
        space: props.space, 
        threadName: props.threadName, 
        postId: props.postId
      })
    }
  }, [isRequested])
  // const isSpaceReady = useSpaceReadyEffect(box, props)
  // const isThreadReady = useThreadReadyEffect(box, props)

  /* --- Component --- */
  return (
  props.children
  ? <Atom.Span onClick={deleteRequestHandler}>{props.children}</Atom.Span>
  : props.isClickToAccess
    ? (
      <CMS.AccessThread
        spaceAuto={props.spaceAuto} threadAuto={props.threadAuto}
        space={props.space}
        threadAddress={props.threadAddress}
        threadName={props.threadName}
        threadOptions={{
          firstModerator: props.firstModerator,
          members: true
        }}
        componentIsLoggedOut={props.componentIsLoggedOut}
        componentIsLoading={props.componentIsLoading}
        componentIsLoggedIn={props.componentIsLoggedIn}

        componentIsSpaceClosed={props.componentIsSpaceLoading}
        componentIsSpaceLoading={props.componentIsSpaceLoading}
        componentIsSpaceOpen={props.componentIsSpaceOpen}

        componentIsThreadClosed={props.componentIsThreadClosed}
        componentIsThreadLoading={props.componentIsThreadLoading}
        componentIsThreadJoined={props.componentIsThreadJoined}

        >
          <Atom.Span onClick={deleteRequestHandler}>{props.componentIsThreadJoined}</Atom.Span>
      </CMS.AccessThread>
    )
    : isThreadyReady
    ? (
        <Atom.Span
          {...props.styledLablActive}
          onClick={deleteRequestHandler}>
          {props.componentIsThreadReady}
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
    level='thread'
    space={SPACE}
    threadName={props.threadName}
  />
</Atom.Flex>

MessageDelete.defaultProps = {
  isClickToAccess: true,
  componentIsLoggedOut: <Atom.Span pointer xxs tag='white' opacity={1}>Login <Atom.Span opacity={.6} pl={1} ><Atom.LoadingSquare /></Atom.Span></Atom.Span>,
  componentIsLoading: <Atom.Span pointer xxs tag='white' opacity={1} >Loading <Atom.Span pl={1}><Atom.LoadingSquare className='active' /></Atom.Span></Atom.Span>,
  componentIsLoggedIn: <Atom.Span pointer xxs tag='white' opacity={1} >Opened <Atom.Span pl={1}><Atom.LoadingSquare className='active' /></Atom.Span></Atom.Span>,
  componentIsSpaceOpen: <Atom.Span pointer xxs tag='blue' >Space Opened</Atom.Span>,
  componentIsThreadJoined: <Atom.Span pointer xxs tag='red' >Remove from List</Atom.Span>,
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

MessageDelete.propTypes = {
  spaceAuto: PropTypes.bool
}


export default props =><BoxInject><MessageDelete {...props} /></BoxInject>
