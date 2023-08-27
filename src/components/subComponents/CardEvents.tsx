import { useNavigate } from "react-router-dom";
import { IEvent } from "../../interfaces/interfaces";
import style from "../../styles/CardEvents.module.css";
interface Props {
  listingEvents: IEvent[];
}
export function CardEvents({ listingEvents }: Props) {
  const navigate = useNavigate();
  function obtenerMes(fechaString: string) {
    const meses = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Crear un objeto Date con la fecha
    const fecha = new Date(fechaString);

    // Obtener el número de mes (0 a 11)
    const mes = fecha.getMonth();

    // Obtener el nombre del mes
    const nombreMes = meses[mes];

    return {
      nombreMes: nombreMes,
    };
  }
  const handleEventClick = (data: IEvent) => {
    navigate(`/event/${data.name}`, { state: { data } });
  };
  return (
    <div className={style.container}>
      {listingEvents.map((event: IEvent) => (
        <div
          key={event.name}
          className={style.container_card}
          onClick={() => handleEventClick(event)}
        >
          <div className={style.container_one}>
            <section>
              <p>{obtenerMes(event.date).nombreMes}</p>
              <p className={style.date}>{event.date.substring(8, 10)}</p>
            </section>
            <img
              src="https://i0.wp.com/northtamerton.com/wp-content/uploads/2020/03/events.jpg?resize=1024%2C357&ssl=1"
              alt={event.description}
              className={style.img_card}
            />
          </div>
          <div className={style.container_two}>
            <p>{event.location}</p>
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <p>{event.time} hs</p>
          </div>
        </div>
      ))}
    </div>
  );
}
