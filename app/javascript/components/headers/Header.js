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
        <FTContainer to={'/items'}> <FTIcon/><Block>Home</Block></FTContainer>     
        </FlexStart>
        <FlexEnd>
        <PickupContainer to={'/bag'}><PickupIcon/><PickupCount>{pickup.length}</PickupCount> <Block>Checkout</Block> </PickupContainer>
        <UserContainer href={'https://restaurantpickupapp.com/FusionStreet'}><UserIcon/><Block>Website</Block></UserContainer>     
        </FlexEnd>
    </Wrapper>
    )
}


