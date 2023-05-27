import { render } from '@testing-library/react'

import Pagination from './Pagination'

test('should render Pagination component', () => {
  const view = render(<Pagination />)

  expect(view).toMatchSnapshot()
})