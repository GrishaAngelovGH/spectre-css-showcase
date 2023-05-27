const PaginationControl = () => (
  <div className='columns'>
    <div className='column col-4'>
      <ul className='pagination'>
        <li className='page-item page-prev'>
          <a href='#'>
            <div className='page-item-subtitle'>Previous</div>
            <div className='page-item-title h5'>Getting started</div>
          </a>
        </li>
        <li className='page-item page-next'>
          <a href='#'>
            <div className='page-item-subtitle'>Next</div>
            <div className='page-item-title h5'>Layout</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default PaginationControl