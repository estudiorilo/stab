import * as components from './components'

const install = (Vue) => {
    Object.keys(components).forEach((name) => {
        Vue.component(name, components[name])
    })
}

export * from './components'
export default install