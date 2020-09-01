import React from 'react';
import { render, RenderResult, fireEvent, cleanup, wait  } from '@testing-library/react'; 
import { isString } from 'util';
import Menu, {MenuProps} from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu'
import { watchFile } from 'fs';
const testProps: MenuProps = { 
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}

const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical'
}
const generateMenu = (props: MenuProps) => {
  return (
  <Menu {...props}>
        <MenuItem >active</MenuItem>
        <MenuItem disabled>disabled</MenuItem>
        <MenuItem >xyz</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem >drop1</MenuItem>
          <MenuItem >drop2</MenuItem>
        </SubMenu>
  </Menu>
  )
}

const createStyleFile = () => {
  const cssFile: string = `
    .ark-submenu {
      display: none;
    }
    .ark-submenu.menu-opened {
      display:block;
    }
  `
  const style = document.createElement('style');
  style.type="text/css";
  style.innerHTML = cssFile;
  return style;
}
let wrapper:RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement;
describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    wrapper.container.append(createStyleFile())
    menuElement = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  }) 
  it('should render correct Menu and MenuItem based on default props' , () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('ark-menu test');
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4);
    expect(activeElement).toHaveClass('menu-item is-active');
    expect(disabledElement).toHaveClass('menu-item is-disabled');
  })
  it('click items should change active and call the right callback', ()=> {
    const thirdItem = wrapper.getByText('xyz');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
  })
  it('should render vertical model when model is set to vertical', () => {
    cleanup();
    const wrapper = render(generateMenu(testVerProps));
    const menuElement = wrapper.getByTestId('test-menu');
    expect(menuElement).toHaveClass('menu-vertical');
  })
  it('should show dropdown items when items hover on subMenu', async () => {
    expect(wrapper.queryByText('drop1')).not.toBeVisible();
    const dropdownElement = wrapper.getByText('dropdown');
    fireEvent.mouseEnter(dropdownElement)
    await wait(()=>{
      expect(wrapper.queryByText('drop1')).toBeVisible();
    })
    // getByText返回HTML ELMent
    fireEvent.click(wrapper.getByText('drop1'));
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0');
    fireEvent.mouseLeave(dropdownElement);
    await wait(() => {
      expect(wrapper.queryByText('drop1')).not.toBeVisible();
    })

  })
})