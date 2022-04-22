/*
 * COPYRIGHT NOTICE
 * All source code contained within the Cydarm cybersecurity software provided by Cydarm
 * Technologies Pty Ltd ABN 17 622 236 113 (Company) is the copyright of the Company and
 * protected by copyright laws. Redistribution or reproduction of this material is strictly prohibited
 * without prior written permission of the Company. All rights reserved.
 */
import React from 'react';

export type DeclarativeFormProps<T extends Record<string, unknown>> = {

    data: T;
    onFormSubmit: (value: T) => void;
};



const SingleFormControl = (props: { kkey: string, value: unknown }) => {


    const { kkey, value } = props;

    if (typeof value === 'string') {
        return <input type="text" name={kkey} defaultValue={value} />
    }

    if (typeof value === 'number') {
        return <input type="number" name={kkey} defaultValue={value} />
    }

    if (typeof value === "boolean") {
        return <input type="checkbox" name={kkey} defaultChecked={value} />
    }

    console.warn(`I don't recognise value of key: ${kkey} and type: ${typeof value}, so returning nothing `)
    return null;
}


function parseInputValue(value: string, type: string) {
    switch (type) {
        case "text": return value;
        case "number": return parseInt(value);
        case "checkbox": return value === "on";
        default: throw new Error();
    }
};

// NOT DONE
// A more advanced version that allows defining labels, selection from an array of things etc.  
export const DeclarativeForm2 = <T extends Record<string, unknown>>(props: DeclarativeFormProps<T>) => {
    const { data, onFormSubmit } = props;


    return (
        <form
            style={{
                display: "flex",
                flexFlow: "column nowrap",
                border: "solid 1px grey",
                padding: 20,
                margin: 20,
            }}
            onSubmit={(e) => {
                e.preventDefault();

                //@ts-ignore - I don't like how React treats form events
                const formEls = Array.from(e.target.elements) as Array<HTMLInputElement>;
                const newData = formEls.reduce((acc, cur) => {
                    const { name, value, type } = cur;


                    console.log(name, value, type);
                    if (!name) {
                        return acc;
                    }

                    const valueToUse = parseInputValue(value, type);

                    return {
                        ...acc,
                        [name]: valueToUse
                    }
                }, data);


                onFormSubmit(newData);
            }}>
            <div> hello</div>

            {
                Object.entries(data).map((v) => {
                    const [key, value] = v;
                    return <label key={key}>

                        {key}
                        <SingleFormControl kkey={key} value={value} />
                    </label>
                })
            }


            <button type="submit">Submit</button>

        </form >
    );
};
