import { render } from '@testing-library/react'

import Card from './Card'

test('should render Card component', () => {
  const view = render(<Card />)

  expect(view).toMatchSnapshot()
})