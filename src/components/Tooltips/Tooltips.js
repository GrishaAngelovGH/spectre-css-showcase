const Tooltips = () => {
  const tooltips = ['', 'tooltip-right', 'tooltip-bottom', 'tooltip-left']

  return (
    <div className='columns text-center m-2'>
      {
        tooltips.map((v, i) => (
          <div key={i} className='column col-xs-12'>
            <button className={`btn btn-primary tooltip ${v}`} data-tooltip='Top Tooltip Text'>{v.length ? v : 'top tooltip'}</button>
          </div>
        ))
      }
    </div>
  )
}

export default Tooltips