import * as React from 'react';
import Popover from '@mui/material/Popover';
import { PopoverWrapper } from './Popover.styled.js';

export default function CustPopover(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const { children,title="Click Me" } = props;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
    <PopoverWrapper>
        <div aria-describedby={id} variant="contained" onClick={handleClick} className='click-container'>
            {title}
        </div>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
        {children}
        </Popover>
    </PopoverWrapper>
    );
}