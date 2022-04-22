
import React from 'react';

export type ExampleProps = {
};



export const Example = (props: React.PropsWithChildren<ExampleProps>) => {
    const { children } = props;


    return (
        <div style={{ border: "solid 1px black", margin: 10, padding: 10 }}>
            {children}
        </div>
    );
};
