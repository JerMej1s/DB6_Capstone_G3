using DB6_Capstone_G3.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace DB6_Capstone_G3.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EventController : Controller
    {
        [HttpGet("save")]
        public static Event SaveEvent(int idUser, string eventName, DateTime date, string city, string state)
        {
            return DAL.SaveEvent(idUser, eventName, date, city, state);
        }

        [HttpPost("home")]
        public IEnumerable<Event> GetEvents(int idUser)
        {
            return DAL.GetEventsForUser(idUser);
        }
    }
}
