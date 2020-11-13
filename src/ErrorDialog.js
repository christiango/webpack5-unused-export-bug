import * as React from 'react';
import { Dialog } from 'office-ui-fabric-react';

export const ErrorDialog = () => {
    return React.createElement(Dialog, { hidden: false, maxWidth: "none" });
};
