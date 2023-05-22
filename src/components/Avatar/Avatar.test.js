import { render } from '@testing-library/react'

import Avatar from './Avatar'

test('should render Avatar component', () => {
  const view = render(<Avatar initials='JS' />)

  expect(view).toMatchSnapshot()
})