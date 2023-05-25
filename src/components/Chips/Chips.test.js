import { render } from '@testing-library/react'

import Chips from './Chips'

test('should render Chips component', () => {
  const view = render(<Chips />)

  expect(view).toMatchSnapshot()
})