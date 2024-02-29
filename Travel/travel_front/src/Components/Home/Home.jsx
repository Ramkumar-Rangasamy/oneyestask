import React, { useState } from 'react';



//import files him
import './home.css';

import Package from './Package/Package';
import Hotel from './Hotel/Hotel';
import Car from './Car';
import Flight from './Flight/Flight';



function Tab({ label, onClick, active }) {
  const tabStyle = {
    display: 'inline',
    padding: '15px 50px',
    marginRight: '10px',
    cursor: 'pointer',
    borderBottom: 'none',
    borderRadius: '5px 5px 0 0',
    color:'black'
  };

  return (
    <div style={tabStyle} onClick={onClick}>
      {label}
    </div>
  );
}

function TabContent({ activeTab, tabName, children }) {
  const contentStyle = {
    padding: '40px',
    border: '1px solid #ccc',
    borderRadius: '0 0 5px 5px',
    backgroundColor: '#fff',
    color:'black',
    display: activeTab === tabName ? 'block' : 'none',
  };

  return <div style={contentStyle}>{children}</div>;
}

export default function Home() {
 
  //Tab Start 
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabName) => {
    if (activeTab !== tabName) {
      setActiveTab(tabName);
    }
  };
  //End

 

  return (
    <div className='home_container'>
      <div className='home_head'>

        <div>
          <h1>Ready to Travel? We’ve Got Great Flight Deals!</h1>
            <p>
                Call us at our 24/7 (Toll-Free) Number{' '}
                <span>91+ 9944-8971-80</span> to Get Cheap Flights!
            </p>
        </div>

        <div className='head_book mt-5'>
            <div className='row'>
                <div className='col-4 col-sm-2 col-lg-1'>
                    
                    <Tab
                       
                        label='Flights'
                        onClick={() => handleTabClick('tab1')}
                        active={activeTab === 'tab1'}
                    />
                </div>
                <div className='col-4 col-sm-3 col-lg-1 pl-1'>
                    <Tab
                        label='Packages'
                        onClick={() => handleTabClick('tab2')}
                        active={activeTab === 'tab2'}
                    />
                </div>
                <div className='col-5 col-sm-3 col-lg-1'>
                    <Tab
                        label='Hotels'
                        onClick={() => handleTabClick('tab3')}
                        active={activeTab === 'tab3'}
                    />
                </div>
                
            </div>
        </div>


        <div>

          <TabContent activeTab={activeTab} tabName='tab1'>
            <Flight/>     
          </TabContent>

          <TabContent activeTab={activeTab} tabName='tab2'>
            <Package/>
          </TabContent>

          <TabContent activeTab={activeTab} tabName='tab3'>
            <Hotel/>
          </TabContent>

          
        </div>

      </div>
    </div>
  );
}
