import stabContainer from './StabContainer';

export const StabContainer = stabContainer;

const components = {
    StabContainer
};

export default {
    install(Vue) {
        Object.keys(components)
            .forEach(name => Vue.component(name, components[name]))
    }
}
