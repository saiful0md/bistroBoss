import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import coverImg from '../../assets/shop/banner2.jpg';
import useMenu from '../../hooks/useMenu/useMenu';
import Cover from '../Sheard/Cover/Cover';
import ShopTab from './ShopTab/ShopTab';
const OurShop = () => {
    const categories = ['salad','pizza','soup','dessert','drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>
            <Cover
                img={coverImg}
                title={'OUR SHOP'}
                details={'Would you like to try a dish?'}
            ></Cover>
            <div className='max-w-6xl mx-auto text-center my-20'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='pb-8'>
                        <Tab>Salad</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel><ShopTab item={salad}></ShopTab></TabPanel>
                    <TabPanel><ShopTab item={pizza}></ShopTab> </TabPanel>
                    <TabPanel><ShopTab item={soup}></ShopTab> </TabPanel>
                    <TabPanel><ShopTab item={dessert}></ShopTab> </TabPanel>
                    <TabPanel><ShopTab item={drinks}></ShopTab> </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;