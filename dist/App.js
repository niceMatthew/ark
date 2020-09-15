import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
library.add(fas);
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Menu, { mode: 'vertical', onSelect: function (index) {
                    alert(index);
                } },
                React.createElement(MenuItem, null, "cool link"),
                React.createElement(MenuItem, { disabled: true }, "cool link1"),
                React.createElement(MenuItem, null,
                    React.createElement(SubMenu, { title: "dropdown" },
                        React.createElement(MenuItem, null, "dropdown1"),
                        React.createElement(MenuItem, null, "dropdown2"),
                        React.createElement(MenuItem, null, "dropdown3")))),
            React.createElement(Button, null, "Heelo"),
            React.createElement(Button, { btnType: 'primary', size: 'lg' }, "Heelo"),
            React.createElement(Button, { btnType: 'link', href: "http://www.baidu.com" }, "Baidu"),
            React.createElement(Button, { btnType: 'link' }, "Baidu"),
            React.createElement("hr", null),
            React.createElement("code", null, "const a = 'b'"),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
export default App;
