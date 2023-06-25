import React from 'react';
import styled from 'styled-components';


const Option = styled.option `
    margin: 15px 0px;
`
 
const InputOpcion = ({value,children}) => {
    return ( 
        <Option value={value}>{children}</Option>
     );
}

export default InputOpcion;