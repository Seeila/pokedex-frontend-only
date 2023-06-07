const getDisplayName = (WrappedComponent: React.FunctionComponent <any>) => {
    const node = WrappedComponent as React.FunctionComponent <React.ComponentType<any>>;
    const type = (node as unknown as React.ReactElement<React.FunctionComponent>)
    .type;
    const displayName =
    typeof type === 'function'
      ? (type as React.FunctionComponent).displayName ||
        (type as React.FunctionComponent).name ||
        'Component'
      : type;
      return displayName;
};

export default getDisplayName;