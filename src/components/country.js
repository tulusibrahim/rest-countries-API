import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Button, Flex, Image, Box } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { CentralTheme, fontSize, lightElement } from "../theme";

const Country = () => {
    const location = useLocation()
    const history = useNavigate();
    console.log(location)
    const detail = location.state.item

    const BorderCard = ({ item }) => {
        return (
            <Flex w={'80px'} boxShadow={`0px 0px 2px 1px ${CentralTheme().elementColor === lightElement ? 'gray' : 'white'}`} m={'5px'} borderRadius={'3px'} h={'30px'} justify={'center'} align={'center'} bg={CentralTheme().elementColor}>
                {item}
            </Flex>
        )
    };


    return (
        <Flex fontSize={fontSize} bg={CentralTheme().bgColor} w={'100%'} minH={'88vh'} h={'auto'} justify={'flex-start'} direction={'column'}>
            <Flex w={['85%', '85%', '90%', '90%']} h={'15vh'} color={CentralTheme().textColor} align={'center'} alignSelf={'center'} >
                <Button onClick={() => history(-1)} h={'30px'} bg={CentralTheme().elementColor} boxShadow={`0px 0px 2px 1px ${CentralTheme().elementColor === lightElement ? 'gray' : 'white'}`}>
                    <ChevronLeftIcon />
                    Back
                </Button>
            </Flex>
            <Flex w={['85%', '85%', '90%', '90%']} h={'auto'} alignSelf={'center'} justify={{ md: 'space-between', lg: 'space-between' }} direction={['column', 'column', 'row', 'row']} color={CentralTheme().textColor}>
                <Flex w={['100%', '100%', '45%', '45%']} justify={'center'}>
                    <Image src={`${detail.flags.png}`} w={'100%'} boxShadow={`0px 0px 4px 1px ${CentralTheme().elementColor === lightElement ? 'gray' : 'none'}`}></Image>
                </Flex>
                <Flex direction={'column'} h={'auto'} w={['100%', '100%', '45%', '45%']}>
                    <Flex w={'100%'} fontWeight={'bold'} py={'10px'} fontSize={'24px'}>
                        {detail.name?.common}
                    </Flex>
                    <Flex direction={['column', 'column', 'row', 'row']} justify={{ md: 'space-between', lg: 'space-between' }} >
                        <Flex direction={'column'} my={'10px'}>
                            <Box py={'5px'}><b>Native Name: </b> {detail.nativeName}</Box>
                            <Box py={'5px'}><b>Population: </b> {detail.population}</Box>
                            <Box py={'5px'}><b>Region: </b> {detail.region}</Box>
                            <Box py={'5px'}><b>Sub Region: </b> {detail.subregion}</Box>
                            <Box py={'5px'}><b>Capital: </b> {detail.capital}</Box>
                        </Flex>
                        <Flex direction={'column'} my={'10px'}>
                            <Box py={'5px'}><b>Top Level Domain: </b> {detail.nativeName}</Box>
                            <Box py={'5px'}><b>Currencies: </b> {detail.population}</Box>
                            <Box py={'5px'}><b>Languages: </b> {detail.region}</Box>
                        </Flex>
                    </Flex>
                    <Flex direction={['column', 'column', 'row', 'row']} align={['flex-start', 'flex-start', 'center', 'center']} my={'10px'}>
                        <Box fontWeight={'bold'} mr={{ md: '20px', lg: '20px' }}>Border Countries:</Box>
                        <Flex wrap={'wrap'} py={'10px'}>
                            {detail?.borders?.map((item, key) => (
                                <BorderCard item={item} key={key} />
                            ))}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )
};
export default Country;
