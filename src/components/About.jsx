// import React from 'react';
// import {Link} from 'react-router-dom'
// import Navbar from './NavBar';

// function About () {
//   return (
//     <div>
//         <Navbar />
  
//       <h1>About Us</h1>
//       <p>Welcome to our awesome Application! This is the About page where you can learn more about us.</p>
      
//       <h3>Our Team</h3>
//       <ul>
//         <li><strong>
//              <a href='https://github.com/Tushar16-1998' >Tushar Sunder</a>
//              </strong></li>
//         <li><strong>
//         <a href='https://github.com/MateusCTO' >Mateus Lima</a>
//             </strong></li>
//       </ul>
//       <Link to='/countries'>Back</Link>
//     </div>
//   );
// };

// export default About;



///////////////////////////////////////////////////


// About.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text, List, ListItem } from '@chakra-ui/react';
import Navbar from './NavBar';

function About() {
  return (
    <Box p={8} maxW="600px" mx="auto">
      <Navbar />

      <Heading as="h1" fontSize="4xl" mb={4}>
        About Us
      </Heading>
      <Text fontSize="lg">
        Welcome to our awesome Application! This is the About page where you can learn more about us.
      </Text>

      <Heading as="h3" fontSize="2xl" mt={8} mb={4}>
        Our Team
      </Heading>
      <List styleType="none" pl={0}>
        <ListItem mb={4}>
            <Link to='/tushar'>
                <strong>Tushar Sunder</strong>
            </Link>
        </ListItem>
        <ListItem>
            <Link to='/mateus'><strong>Mateus Lima</strong></Link>
        </ListItem>
      </List>
      <Link to='/countries' display="block" mt={6} color="teal.500" fontSize="lg" fontWeight="bold">
        Back
      </Link>
    </Box>
  );
}

export default About;
