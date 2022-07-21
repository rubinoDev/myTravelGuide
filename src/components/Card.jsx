export function Card(props){
  return(
    <section className="card">
      <div>
        <img className="card__img" src={props.item.imageUrl}/>
      </div>

      <div>
        <div className="card__header-container">
          <h3 className="card__country">{props.item.location}</h3>
          <a className="card__link" href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>

        <div>
          <h2 className="card__spot">{props.item.title}</h2>
          <p className="card__date">{props.item.startDate} - {props.item.endDate}</p>
          <p className="card__description">{props.item.description}</p>
        </div>
      </div>


    </section>
  )
}