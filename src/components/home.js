import { Flex, Image, Input, InputGroup, InputLeftElement, Select, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CentralTheme, lightElement } from '../theme';

const Home = (second) => {
    const [country, setCountry] = useState([]);
    const [searchResult, setsearchResult] = useState([]);
    const [searchRegion, setSearchRegion] = useState([]);


    const getData = async () => {
        const country = await fetch('https://restcountries.com/v2/all')
        const json = await country.json()
        console.log(json)
        setCountry(json)
    };

    const Card = (item) => {
        item = item.item
        return (
            <Flex borderRadius={'8px'} w={['75%', '50%', '20%', '20%']} mx={['10px', '10px', '10px', '10px']} alignItems={'center'} direction={'column'} minH={'320px'} height={'auto'} color={CentralTheme().textColor} bg={CentralTheme().elementColor} my={'20px'} boxShadow={`0px 0px 80px -20px ${CentralTheme().elementColor === lightElement ? 'gray' : 'none'}`}>
                <Image src={`${item.flags.png}`} w={'100%'} h={'45%'} borderTopRadius={'8px'}></Image>
                <Flex w={'85%'} direction={'column'} alignSelf={'center'} justify={'space-evenly'} maxH={'auto'}>
                    <Link to={`/country/${item.name}`} state={{ item }}>
                        <Text fontSize={20} fontWeight={'bold'} py={'10px'}>{item.name}</Text>
                    </Link>
                    <Text><strong>Population: </strong>{item.population}</Text>
                    <Text><strong>Region: </strong>{item.region}</Text>
                    <Text><strong>Capital: </strong>{item.capital}</Text>
                </Flex>
            </Flex >
        )
    };

    const CardRegion = (item) => {
        item = item.item
        return (
            <Flex borderRadius={'8px'} w={['75%', '50%', '20%', '20%']} mx={['10px', '10px', '10px', '10px']} alignItems={'center'} direction={'column'} minH={'320px'} height={'auto'} color={CentralTheme().textColor} bg={CentralTheme().elementColor} my={'20px'} boxShadow={`0px 0px 80px -20px ${CentralTheme().elementColor === lightElement ? 'gray' : 'none'}`}>
                <Image src={`${item.flags.png}`} w={'100%'} h={'45%'} borderTopRadius={'8px'}></Image>
                <Flex w={'85%'} direction={'column'} alignSelf={'center'} justify={'space-evenly'} maxH={'auto'}>
                    <Link to={`/country/${item.name.common}`} state={{ item }}>
                        <Text fontSize={20} fontWeight={'bold'} py={'10px'}>{item.name.common}</Text>
                    </Link>
                    <Text><strong>Population: </strong>{item.population}</Text>
                    <Text><strong>Region: </strong>{item.region}</Text>
                    <Text><strong>Capital: </strong>{item.capital}</Text>
                </Flex>
            </Flex >
        )
    };

    const search = async (input) => {
        setSearchRegion([])
        let search = await fetch(`https://restcountries.com/v2/name/${input}`)
        let json = await search.json()
        console.log(json)
        console.log(json.length)
        setsearchResult(json)
    };

    const searchRegionInput = async (input) => {
        setsearchResult([])
        let region = await fetch(`https://restcountries.com/v3.1/region/${input}`)
        let json = await region.json()
        console.log(json)
        setSearchRegion(json)
    };


    useEffect(() => {
        setsearchResult([])
        setCountry([])
        getData()
    }, []);

    return (
        <Flex w={'auto'} minH={'88vh'} h={'auto'} bg={CentralTheme().bgColor} direction={'column'} fontFamily={'Nunito Sans'}>
            {/* input, filter */}
            <Flex w={'90%'} h={'20vh'} mt={'30px'} justify={['space-around', 'space-around', 'space-between', 'space-between']} alignSelf={'center'} align={['flex-start', 'center', 'center', 'center']} direction={['column', 'row', 'row', 'row']}>
                <InputGroup bg={CentralTheme().elementColor} w={['100%', '40%', '30%', '30%']} boxShadow={`0px 0px 4px 1px ${CentralTheme().elementColor === lightElement ? 'gray' : 'none'}`}>
                    <InputLeftElement children={<SearchIcon color={CentralTheme().elementColor} />} />
                    <Input color={CentralTheme().textColor} onChange={e => search(e.target.value)} border={'none'} placeholder='Search for a country'></Input>
                </InputGroup>
                <Select w={['50%', '30%', '30%', '30%']} bg={CentralTheme().elementColor} border={'none'} color={CentralTheme().textColor} onChange={(e) => searchRegionInput(e.target.value)} boxShadow={`0px 0px 4px 1px ${CentralTheme().elementColor === lightElement ? 'gray' : 'none'}`}>
                    <option style={{ backgroundColor: CentralTheme().elementColor }} value='Filter by Region' disabled>Filter by Region</option>
                    <option style={{ backgroundColor: CentralTheme().elementColor }} value='Africa'>Africa</option>
                    <option style={{ backgroundColor: CentralTheme().elementColor }} value='America'>America</option>
                    <option style={{ backgroundColor: CentralTheme().elementColor }} value='Asia'>Asia</option>
                    <option style={{ backgroundColor: CentralTheme().elementColor }} value='Europe'>Europe</option>
                    <option style={{ backgroundColor: CentralTheme().elementColor }} value='Oceania'>Oceania</option>
                </Select>
            </Flex>
            <Flex w={'auto'} h={'auto'} wrap={'wrap'} justify={['center', 'space-evenly', 'space-evenly', 'space-evenly']} align={'center'} direction={['column', 'column', 'row', 'row']}>
                {
                    searchResult.length ?
                        searchResult.map((item, key) => (
                            <Card item={item} key={key} />
                        )) : null
                }
                {
                    searchRegion.length ?
                        searchRegion.map((item, key) => (
                            <CardRegion item={item} key={key} />
                        )) : null
                }
                {
                    searchResult.length ?
                        null
                        :
                        searchRegion.length ?
                            null
                            :
                            country.map((item, key) => (
                                <Card item={item} key={key} />
                            ))
                }
            </Flex>
        </Flex>
    )
};

export default Home;
