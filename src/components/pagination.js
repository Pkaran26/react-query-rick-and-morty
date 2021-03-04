export const Pagination = ({ info: { pages, prev, next }, pageFunc, currentPage })=>{

  const setPage = (e, page)=>{
    e.preventDefault()
    pageFunc(currentPage + page)
  }

  return (
    <div>
      <ul className="pagination">
        <li className={`page-item ${ prev? null: 'disabled' }`}>
          <a className="page-link" href="#prev" onClick={ (e)=> setPage(e, -1) }>&laquo;</a>
        </li>
        <li className="page-item">
          <a className="page-link" href={`#${ currentPage }`}>{ currentPage }</a>
        </li>
        <li className={`page-item ${ next? null: 'disabled' }`}>
          <a className="page-link" href="#next" onClick={ (e)=> setPage(e, 1) }>&raquo;</a>
        </li>
      </ul>
    </div>
  )
}
