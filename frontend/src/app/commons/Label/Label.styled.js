import styled from 'styled-components';

const StyledName = styled.div`
position: absolute;
top: ${props => props.top}px;
left: ${props => props.left}px;
font-weight: ${props => props.weight};
background-color: white;
border-radius: 5px;
padding: 0 5px;
font-size: 12px;
white-space: nowrap;
color: ${props => (!props.type ? '#000000' : props.type === 'focus' ? props.theme.colors.primaryColor : props.theme.colors.textColor)};
white-space:nowrap;
`;

export default StyledName;
