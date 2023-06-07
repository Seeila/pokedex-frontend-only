import React from 'react';

import mergeClasses from '@pokedex-graphql/helpers/shallowMerge';
import getDisplayName from '@pokedex-graphql/helpers/getDisplayName';

interface IClassify extends React.FunctionComponent <any>{
    className: string,
    classes: any
}

const classify = (defaultClasses:string) => (WrappedComponent: React.FunctionComponent <any>) =>
    class extends React.Component<IClassify> {
        static displayName = `Classify(${getDisplayName(WrappedComponent)})`;

        render() {
            const { className, classes, ...restProps } = this.props;
            const classNameAsObject = className ? { root: className } : null;
            const finalClasses = mergeClasses(
                defaultClasses,
                classNameAsObject,
                classes
            );

            return <WrappedComponent {...restProps} classes={finalClasses} />;
        }
    };

export { mergeClasses, mergeClasses as useStyle };

export default classify;
