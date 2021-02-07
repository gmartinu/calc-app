import React from 'react';
import PropTypes from 'prop-types';
import { Button, Box } from '@material-ui/core';

const Buttons = (props) => {
    const { 
      increment, 
      decrement
    } = props;
  
    return (
        <Box display="flex">
            <Box mr={2}>
                <Button onClick={increment} variant="contained" color="primary">+</Button>
            </Box>
            <Box ml={2}>
                <Button onClick={decrement} variant="contained" color="secondary">-</Button>
            </Box>
        </Box>
    )
}

Buttons.propTypes = {
    increment: PropTypes.func,
    decrement: PropTypes.func
}

export default Buttons;