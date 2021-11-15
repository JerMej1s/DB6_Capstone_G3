using DB6_Capstone_G3.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace DB6_Capstone_G3.Controllers
{
    [Route("event")]
    [ApiController]
    public class EventController : Controller
    {
        [HttpPost("save")]
        //public Event SaveEvent(int idUser, string eventName, DateTime date, string city, string state)
        public Event SaveEvent(Event evt)
        {
            evt.idUser = 1;
            return DAL.SaveEvent(evt.idUser, evt.eventName, evt.date, evt.city, evt.state);
        }

        [HttpPost("home")]
        public IEnumerable<Event> GetEvents(int idUser)
        {
            return DAL.GetEventsForUser(idUser);
        }
    }
}
