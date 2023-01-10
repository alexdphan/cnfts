import React from 'react';
export var IconoirContext = React.createContext({});
export function IconoirProvider(_a) {
    var iconProps = _a.iconProps, children = _a.children;
    return React.createElement(IconoirContext.Provider, { value: iconProps || {}, children: children });
}
