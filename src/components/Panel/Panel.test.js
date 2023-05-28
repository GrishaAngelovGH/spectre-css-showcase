import { render } from '@testing-library/react'

import Panel from './Panel'

test('should render Panel component', () => {
  const view = render(<Panel />)

  expect(view).toMatchSnapshot()
})