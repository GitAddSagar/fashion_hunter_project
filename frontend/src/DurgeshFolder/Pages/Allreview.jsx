import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons'
import { Box  , Heading, Image , Text} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/Navbar'

const Allreview = () => {
  return (
    <Box>
        <Navbar />
        {/*  Whole code after navbar ------------------------------ */}
        <Box className="SingleProductMainDiv"  background="#f1f3f6"  style={{border:"1px   green" , height:"150vh" , }} width={{base:"", sm: "", md: "", lg: "",xl: "",'2xl': ""}}>

        <Box className='SingleProductMain' height="150vh" width="90%" ml="auto" mr="auto" mt="10px"  shadow="lg"  background='#ffffff' display="flex" flexDirection={{base:"column", sm: "column", md: "row", lg: "row",xl: "row",'2xl': "row"}} >
         
         {/*  Image box ------------------- */}
           <Box border="2px solid red" width={{base:"", sm: "", md: "38%", lg: "45%",xl: "35%",'2xl': "35%"}} height="auto" p="20px">

            <Image src="https://rukminim1.flixcart.com/image/400/400/xif0q/shoe/u/g/g/9-2008-black-green-9-sfr-black-original-imagh9kvzs47gur2.jpeg?q=70" alt="productImage" boxSize={{base:"", sm: "300px", md: "200px", lg: "400px",xl: "400px",'2xl': "400px"}}   />
              
             {/*  about category ------- */}
             <Heading fontSize="17px" fontWeight="600" mt="5px" color="#303030" textAlign="left">Carbonn Cloth</Heading> 
      <Text fontSize='14px' className='control' fontWeight="500" color="#727272" textAlign="left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus debitis, laborum quaerat facilis illum praesentium aut obcaecati. Ad, recusandae autem.</Text> 
            {/* category end------------------- */}

           {/*  Price is here ----------- */}
            <Box style={{display:'flex' , alignItems:"center"}}>
          <Heading fontSize='18px' fontWeight="600" color="#303030" mt={1.5}  textAlign="left">$200</Heading>
          <Text as='del' fontSize='18px' className='control' mt={1.5} ml={3} fontWeight="600" color="#727272" textAlign="left">$300</Text>
          <Text  fontSize='14px' className='control' mt={1.5} ml={2} fontWeight="600" color="#e1a26f" textAlign="left">({100}% off)</Text>
          </Box>
          {/* Price end ----------------- */}
            
            {/* approved---------- */}
            <Box display="flex" justifyContent="space-between" border="1px  red" width={{base:"100%", sm: "90%", md: "70%", lg: "60%",xl: "50%",'2xl': "50%"}}>
              <Text mb="15px" textAlign="left" fontSize="16px"><CheckCircleIcon color="#878787" mr="5px" fontSize="14px" />Certified Seller</Text>
    
             
              </Box>
           
            
             </Box>

           {/* Rating Box----------------- */}
           <Box border="2px solid black" width={{base:"", sm: "", md: "68%", lg: "60%",xl: "60%",'2xl': "60%"}} height="60vh" >
             <Heading fontWeight={500} fontSize="22px" p="20px" textAlign="left" borderBottom="1px solid #f0f0f0">Lorem ipsum dolor sit amet consectetur.</Heading>

             
               <Box p="20px" border="2px solid red" display="flex">   
               {/*  Rating image */}
               <Box border="1px solid #26a541" display="flex" flexDirection="column" >
             <Text color="#ffffff" display="flex" alignItems="center" justifyContent="center" fontSize="22px"  borderRadius="20px" width="70px"   background="#26a541">2.4 <StarIcon fontSize="15px" ml="4px" color="#ffffff" /></Text> 

            <Box color="#8f8a8f" ml="-15px"  width="128px"  ><Text textAlign="center"  lineHeight="20px" fontWeight="500" fontSize="15px" ml="6px">4 ratings and 4 reviews</Text></Box>
            </Box>
            {/*  rating box length --------- */}
            <Box ml="30px">
             <Text display="flex" alignItems="center">5 <StarIcon fontSize="10px" ml="2px" mr="20px" /> <div style={{backgroundColor:"#f0f0f0" ,width:"170px",height:"5px",borderRadius:"20px" , marginRight:"15px"}}></div>34</Text>
             <Text display="flex" alignItems="center">5 <StarIcon fontSize="10px" ml="2px" mr="20px" /> <div style={{backgroundColor:"#f0f0f0" ,width:"170px",height:"5px",borderRadius:"20px" , marginRight:"15px"}}></div>34</Text>
             <Text display="flex" alignItems="center">5 <StarIcon fontSize="10px" ml="2px" mr="20px" /> <div style={{backgroundColor:"#f0f0f0" ,width:"170px",height:"5px",borderRadius:"20px" , marginRight:"15px"}}></div>34</Text>
             <Text display="flex" alignItems="center">5 <StarIcon fontSize="10px" ml="2px" mr="20px" /> <div style={{backgroundColor:"#f0f0f0" ,width:"170px",height:"5px",borderRadius:"20px" , marginRight:"15px"}}></div>34</Text>
             <Text display="flex" alignItems="center">5 <StarIcon fontSize="10px" ml="2px" mr="20px" /> <div style={{backgroundColor:"#f0f0f0" ,width:"170px",height:"5px",borderRadius:"20px" , marginRight:"15px"}}></div>34</Text>

             </Box>
            
           </Box>



             </Box>
          
          

       </Box>
         </Box>
    </Box>
  )
}

export  {Allreview}