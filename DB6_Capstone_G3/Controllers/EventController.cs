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
            return DAL.SaveEvent(newEvent);
        }

        [HttpGet("home")]
        public IEnumerable<Event> GetEvents([FromBody] int idUser)
        {
            return DAL.GetEventsForUser(idUser);
        }

        [HttpGet("cocktails/{idEvent}")]
        public IEnumerable<Cocktail> GetCocktails([FromRoute] int idEvent)
        {
            return DAL.GetCocktailsForEvent(idEvent);
        }

        [HttpGet("meals/{idEvent}")]
        public IEnumerable<Meal> GetMeals([FromRoute] int idEvent)
        {
            return DAL.GetMealsForEvent(idEvent);
        }
    }
}
