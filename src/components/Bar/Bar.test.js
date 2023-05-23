import { render } from '@testing-library/react'

import Bar from './Bar'

test('should render Bar component', () => {
  const view = render(<Bar />)

  expect(view).toMatchSnapshot()
})