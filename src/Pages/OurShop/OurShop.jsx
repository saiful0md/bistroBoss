import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import coverImg from '../../assets/shop/banner2.jpg';
import FoodCard from '../../components/FoodCard/FoodCard';
import useMenu from '../../hooks/useMenu/useMenu';
import Cover from '../Sheard/Cover/Cover';
const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
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
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                            {
                                salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                            {
                                pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                            {
                                soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                            {
                                dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                            {
                                drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;