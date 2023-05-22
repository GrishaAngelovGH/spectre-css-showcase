import { render } from '@testing-library/react'

import Hero from './Hero'

test('should render Hero component', () => {
  const view = render(<Hero />)

  expect(view).toMatchSnapshot()
})