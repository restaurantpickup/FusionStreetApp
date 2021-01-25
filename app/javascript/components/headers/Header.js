import React, {useContext} from 'react';
import {PickupContext} from '../App'
import {
    Wrapper,
    FlexEnd,
    FlexStart,
    UserIcon,
    FTIcon,
    PickupIcon,
    PickupCount,
    PickupContainer,
    UserContainer,
    FTContainer,
    CompanyLogo,
    BlockLeft,
    Block} from './UI'
export default function Header() {
  const [pickup, setPickup] = useContext(PickupContext);

    return (
    <Wrapper>
        <FlexStart>
        <FTContainer to={'/meals'}> <FTIcon/><Block></Block></FTContainer>     
        </FlexStart>
        <FlexEnd>
        <PickupContainer to={'/bag'}><PickupIcon/><PickupCount>{pickup.length}</PickupCount> <Block></Block> </PickupContainer>
        <UserContainer href={'https://restaurantpickupapp.com/RobBaker'}><UserIcon/><Block></Block></UserContainer>     
        </FlexEnd>
    </Wrapper>
    )
}


