import { render } from '@testing-library/react'

import Nav from './Nav'

test('should render Nav component', () => {
  const view = render(<Nav />)

  expect(view).toMatchSnapshot()
})