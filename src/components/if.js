/**
 * @param  {} props
 * @param  {null;};} =>{return!!props.condition?props.children
 * @returns null
 */
const If = (props) => {
  return !!props.condition ? props.children : null;
};

export default If;