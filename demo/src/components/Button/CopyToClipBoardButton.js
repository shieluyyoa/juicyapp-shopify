import { Button, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Content from '../Content';
import copy from '../../asset/copy.svg'

const CopyToClipboardButton = ({ couponCode }) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(true)
        navigator.clipboard.writeText(couponCode)
    }

    const truncate = (str) => {
        return str.length > 10 ? str.substring(0, 5) + "..." : str;
    }

    return (
        <>
            <Button onClick={handleClick}
                style={{ borderRadius: '10px', padding: '4px 8px', gap: '4px', color: 'white', height: '24px', borderWidth: '0px', width: '73px', whiteSpace: 'nowrap', backgroundColor: '#FFC72C', fontSize: '12px', lineHeight: '16px', fontWeight: '500', letterSpacing: '0.075px', textTransform: 'none' }}
                variant="outlined"
                size='small'
            >{truncate(couponCode)}<img src={copy} /></Button>
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message="Copied to clipboard"
            />
        </>
    )
}

export default CopyToClipboardButton;