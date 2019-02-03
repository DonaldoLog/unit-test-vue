import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import { it } from 'mocha';

describe('HelloWorld.vue', () => {
  it('should has the correct text', () => {
    expect(HelloWorld.data().msg)
      .to.equal('Welcome to Yout Vue.js App')
  })
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
