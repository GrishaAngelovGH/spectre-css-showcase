import { render } from '@testing-library/react'

import Toast from './Toast'

test('should render Toast component', () => {
  const view = render(<Toast />)

  expect(view).toMatchSnapshot()
})