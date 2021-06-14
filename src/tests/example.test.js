import { mount } from '@vue/test-utils'
import TestComponent from './TestComponent'
import PaymentForm from '../components/PaymentForm'

describe('TestComponent', () => {
  test('Content of TestComponent', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        message: 'Hello from test!'
      }
    })
    expect(wrapper.text()).toEqual(
      'The message is: Hello from test!'
    )
  })
})

describe('PaymentForm', () => {
  test('Date is actual', () => {
    const wrapper = mount(PaymentForm)
    const testDate = wrapper.date
    const currentDate = new Date().toLocaleDateString()
    expect(testDate.toEqual(currentDate))
  })
})
