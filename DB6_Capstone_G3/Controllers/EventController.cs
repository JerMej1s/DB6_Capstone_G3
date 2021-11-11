using DB6_Capstone_G3.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DB6_Capstone_G3.Controllers
{
    [Route("[controller]")]
    public class EventController : Controller
    {
        [HttpGet("save")]
        public static Event SaveEvent(int idUser, string eventName, DateTime date, string city, string state)
        {
            return DAL.SaveEvent(idUser, eventName, date, city, state);
        }

        [HttpGet("home")]
        public static IEnumerable<Event> GetEvents(int idUser)
        {
            return DAL.GetEventsForUser(idUser);
        }
    }
}
