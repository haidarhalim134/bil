import React from 'react'
import { Container, IconCont } from './IconTextElements'
import Icon from '../../../Resources/Icon.svg'

function IconText({colored}) {
    return (
      <Container to="/" colored={colored}>
        <IconCont src={Icon} /> Swing
      </Container>
    );
}

export default IconText
