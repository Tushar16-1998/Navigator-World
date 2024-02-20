import LoginPage from "../components/LoginPage";
import { VStack , IconButton , useColorMode} from '@chakra-ui/react'
import { FaSun , FaMoon } from 'react-icons/fa'

function HomePage() {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div>
            <VStack p={4}>
                <IconButton 
                icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}  
                isRound='true' 
                size='lg' 
                alignSelf={'flex-end'}
                onClick={toggleColorMode}
                />

                    <h1>Home Page</h1>
                    
                    <LoginPage />

            </VStack>
        </div>
    )

}

export default HomePage;