import { render } from '@testing-library/react'

import Badge from './Badge'

test('should render Badge component', () => {
  const view = render(<Badge title='Notifications' count={12} />)

  expect(view).toMatchSnapshot()
})