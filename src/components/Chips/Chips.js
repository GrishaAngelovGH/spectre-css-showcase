const Chip = ({ title }) => (
  <span className='chip'>
    {title}
    <a href='#' className='btn btn-clear' aria-label='Close' role='button'></a>
  </span>
)

const Chips = () => {
  const chips = ['Item 1', 'Item 2', 'Item 3']

  return (
    <div className='columns' style={{ margin: 50 }}>
      <div className='column col-4 col-mx-auto'>
        {
          chips.map((v, i) => (
            <Chip key={i} title={v} />
          ))
        }
      </div>
    </div>
  )
}

export default Chips