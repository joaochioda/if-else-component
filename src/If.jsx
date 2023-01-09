import React from "react";
export const If = ({children, conditional}) => {

    function renderComponent() {
        const children1 = React.Children.toArray(children);
        const then = children1.find((child) => child.type?.name === "Then") || {props: {children: null}};
        const else1 = children1.find((child) => child.type?.name === "Else") || {props: {children: null}};
        if (conditional) {
            return then.props.children;
        }
        return else1.props.children;
    }
  
   return (
    <>
        {renderComponent()}
    </>
   )
}