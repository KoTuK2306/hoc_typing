/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, ComponentType } from "react";

interface EqualityProps {
  key: string;
  from: unknown;
  to: unknown;
}

export const withLogger = <P extends Record<string, unknown>>(
  Component: ComponentType<P>
) => {
  return function Logger(props: P) {
    const savedProps = useRef<P>({} as P);

    useEffect(() => {
      const equalityPropsArray: EqualityProps[] = Object.keys(
        savedProps.current
      ).map((key) => ({
        key,
        from: savedProps.current[key],
        to: props[key],
      }));

      savedProps.current = props;
      console.log(
        equalityPropsArray.filter((element) => element.from !== element.to)
      );
    }, [props]);

    return <Component {...props} />;
  };
};
