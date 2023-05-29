import { render } from '@testing-library/react'

import Tiles from './Tiles'

test('should render Tiles component', () => {
  const view = render(<Tiles />)

  expect(view).toMatchSnapshot()
})