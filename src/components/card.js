export const Card = ({ character })=>{
  const { name, image, status, species, type, gender, origin } = character

  return (
    <div className="col-lg-3 col-md-3">
      <div class="card border-primary marb30">
        <img src={ image } alt={ name } />
        <div class="card-body">
          <h4 class="card-title">{ name }</h4>
          <table>
            <tbody>
              <Row label="status" value={ status } />
              <Row label="species" value={ species } />
              <Row label="type" value={ gender } />
              <Row label="origin" value={ origin.name } />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const Row = ({ label, value })=>(
  <tr>
    <td>{ label }</td>
    <td>{ value }</td>
  </tr>
)
