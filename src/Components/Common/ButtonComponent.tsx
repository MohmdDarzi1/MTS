import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../redux/slice/SignModal'

interface ButtonComponentProps {
  onClick?:()=> void;
  children:React.ReactNode
}

const ButtonComponent:React.FC<ButtonComponentProps> = ({onClick,children}) => {
  const dispatch = useDispatch()
  const handleClick = ()=>{
    dispatch(openModal())
  }
  return (
    <>
    <Box sx={{width:"150px",height:"60px",display:"flex",justifyContent:"center",alignItems:"center"}}>    
    <Button  onClick={handleClick} sx={{width:"130px",height:"50px",backgroundColor:"yellow",borderRadius:"50px",border:"1px solid #ccc"}}>
<Typography sx={{fontSize:"15px"}}>
   ورود/ثبت نام
</Typography>
{children}
    </Button>
    </Box>
    </>
  )
}

export default ButtonComponent