const Layout = ({ header, children }) => (
  <div className='container-fluid'>
    <div className='columns'>
      <div className='column col-12'>
        {header}
        <div className='columns'>
          <div className='column col-12'>
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Layout