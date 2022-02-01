import { Flex, Box, useColorMode } from "@chakra-ui/react";
import { fontSize, CentralTheme, lightBg } from "../theme";

const Header = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <Flex fontSize={fontSize} h={'12vh'} w={'100%'} align={'center'} bg={CentralTheme().bgColor} justify={'center'} color={CentralTheme().textColor}>
            <Flex h={'100%'} w={'90%'} justify={'space-between'} align={'center'}>
                <Box fontFamily={'Nunito Sans'} fontWeight={'600'} w={['50%', '50%', '30%', '30%']}>
                    Where in the world?
                </Box>
                <Flex onClick={toggleColorMode} fontFamily={'Nunito Sans'} justify={'space-evenly'} align={'center'} w={['35%', '35%', '18%', '15%']}>
                    {
                        CentralTheme().bgColor === lightBg ?
                            <>
                                <ion-icon name="moon-outline"></ion-icon>
                                Light Mode
                            </>
                            :
                            <>
                                <ion-icon name="moon"></ion-icon>
                                Dark Mode
                            </>
                    }
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Header;