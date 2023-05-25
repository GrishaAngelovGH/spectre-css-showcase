import { render } from '@testing-library/react'

import EmptyState from './EmptyState'

test('should render EmptyState component', () => {
  const view = render(<EmptyState />)

  expect(view).toMatchSnapshot()
})