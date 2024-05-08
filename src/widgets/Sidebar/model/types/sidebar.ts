import React, { FunctionComponent } from 'react';

export type SidebarItemType = {
    path: string;
    text: string;
    Icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
};
