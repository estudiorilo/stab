import Vue from 'vue'
import StabContainer from './StabContainer'

const components = {
    StabContainer
}

Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
})

export default components