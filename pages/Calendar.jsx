import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Calendar() {
  const events = [
    {
      title: "EESTEC EVENT",
      start: "2023-07-26T08:00:00",
      end: "2023-07-26T20:00:00",
    },
  ];
  return (
    <div style={{width: "170vh",margin: "40vh", marginTop: "-85vh"}}>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", 
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", 
        }}
        height={"83vh"}
        events={events}
        eventDidMount={(info) => {
          return new bootstrap.Popover(info.el, {
            title: info.event.title,
            placement: "auto",
            trigger: "hover",
            customClass: "popoverStyle",
            aspectRatio: 0,
            content:
              "<p>Eestec challenge!<strong>  COME ON EVERYBODY!</strong></p>",
            html: true,
          });
        }}
      />
      </div>
  );
}

export default Calendar;