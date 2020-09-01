import React from 'react';
import Button,{ ButtonType, ButtonSize } from './components/Button/button'


import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <Menu mode={'vertical'} onSelect={(index)=> {
        alert(index)
      }}>
        <MenuItem>cool link</MenuItem>
        <MenuItem disabled>cool link1</MenuItem>
        <MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
               dropdown1
             </MenuItem>
             <MenuItem>
               dropdown2
             </MenuItem>
            <MenuItem>
               dropdown3
             </MenuItem>
          </SubMenu>
        </MenuItem>
      </Menu>
        <Button>Heelo</Button>
        <Button btnType={'primary'} size={'lg'}>Heelo</Button>
        <Button btnType={'link'} href="http://www.baidu.com">Baidu</Button>
        <Button btnType={'link'}>Baidu</Button>
        {/* <Alert alertType={'danger'} message="Success Tips" /> */}
        <hr/>
        <code>
          const a = 'b'
        </code>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
