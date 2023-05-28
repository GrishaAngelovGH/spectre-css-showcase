import { render } from '@testing-library/react'

import Steps from './Steps'

test('should render Steps component', () => {
  const view = render(<Steps />)

  expect(view).toMatchSnapshot()
})