import { render } from '@testing-library/react'

import PaginationControl from './PaginationControl'

test('should render PaginationControl component', () => {
  const view = render(<PaginationControl />)

  expect(view).toMatchSnapshot()
})