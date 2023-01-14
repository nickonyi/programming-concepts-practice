const factory = () => {
    const salamu = (name) => console.log(`Hello this ${name}`);
    return { salamu };
}

const smonje = factory();


smonje.salamu("Smonjero");