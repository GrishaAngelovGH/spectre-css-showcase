import { render } from '@testing-library/react'

import Popovers from './Popovers'

test('should render Popovers component', () => {
  const view = render(<Popovers />)

  expect(view).toMatchSnapshot()
})