import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Cell from './Cell';
import * as couponStatus from '../Status'

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

const Tab = styled(TabUnstyled)`
  color: #CFCFCF;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
   
  }

  &:focus {
    color: #fff;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: transparent;
    color: #FFC72C};
    
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)(
    ({ theme }) => `
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 10px 10px -5px rgba(230, 230, 230, 0.3);

  `,
);

export default function UnstyledTabsCustomized() {
    const [mainTabVisible, setMainTabVisible] = useState(true)

    return (
        <TabsUnstyled defaultValue={0}>
            <TabsList >
                <Tab style={{ flexDirection: 'column', alignItems: 'center' }} onClick={() => setMainTabVisible(true)}>Discount Codes
                    <div style={{ background: '#FFC72C', borderRadius: '31px', height: '4px', width: '131px', marginTop: '8px', visibility: mainTabVisible ? 'visible' : 'hidden' }}>
                    </div>
                </Tab>
                <Tab style={{ flexDirection: 'column', alignItems: 'center' }} onClick={() => setMainTabVisible(false)}>
                    Point History
                    <div style={{ background: '#FFC72C', borderRadius: '31px', height: '4px', width: '131px', marginTop: '8px', visibility: mainTabVisible ? 'hidden' : 'visible' }}>
                    </div>
                    <div style={{ display: 'flex', position: 'absolute', width: '20px', height: '20px', backgroundColor: 'black', left: '330px', top: '230px', color: 'white', borderRadius: '50%', fontSize: '12px', fontWeight: '600', alignItems: 'center', justifyContent: 'center' }}>2</div>
                </Tab>
            </TabsList>
            <TabPanel value={0} style={{ maxHeight: '300px', overflowY: 'scroll' }} >
                <Cell status={couponStatus.BUY_1_GET_1_FREE} />
                <Cell status={couponStatus.BUY_1_GET_1_FREE} />
                <Cell status={couponStatus.BUY_1_GET_1_FREE} />
                <Cell status={couponStatus.BUY_1_GET_1_FREE} />
                <Cell status={couponStatus.BUY_1_GET_1_FREE} />
                <Cell status={couponStatus.BUY_1_GET_1_FREE} />
                <Cell status={couponStatus.BUY_1_GET_1_FREE} />
                <Cell status={couponStatus.BUY_1_GET_1_FREE} />
            </TabPanel>
            <TabPanel value={1}><Cell status={couponStatus.BUY_1_GET_1_FREE} /></TabPanel>
        </TabsUnstyled>
    );
}
