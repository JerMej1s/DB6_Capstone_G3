using DB6_Capstone_G3.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DB6_Capstone_G3.Controllers
{
    [Route("user")]
    public class UserController : Controller
    {
        [HttpPost("save")]
        public User SaveUser([FromBody] User newUser)
        {
            return DAL.SaveUser(newUser);
        }

        [HttpPost("home")]
        public int GetIdUser([FromBody] UserLogin loginuser)
        {
            return DAL.ValidateUser(loginuser);
        }

        [HttpGet("events")]
        public IEnumerable<Event> GetEvents(int idUser)
        {
            return DAL.GetEventsForUser(idUser);
        }
    }
}
