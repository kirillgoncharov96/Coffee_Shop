const importAll = (requireContext) => requireContext.keys().reduce((acc, key) => ({...acc, [key.replace(/^\.\/|\.(png|jpe?g|svg)$/g, '')]: requireContext(key)}), {});
 
const images = importAll(require.context('./imageCoffee', false, /\.(png|jpe?g|svg)$/));

export default images;