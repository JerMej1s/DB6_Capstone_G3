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
        public Event SaveEvent([FromBody] Event newEvent)
        {
            newEvent.idUser = 1;
            return DAL.SaveEvent(newEvent);
        }

        [HttpGet("home")]
        public IEnumerable<Event> GetEvents(int idUser)
        {
            return DAL.GetEventsForUser(idUser);
        }
    }
}
