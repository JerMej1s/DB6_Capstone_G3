using DB6_Capstone_G3.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DB6_Capstone_G3.Controllers
{
    [Route("[controller]")]
    public class UserController : Controller
    {
        [HttpGet("save")]
        public static User SaveUser(User user)
        {
            return DAL.SaveUser(user);
        }

        [HttpGet("home")]
        public static User GetUser(string email, string password)
        {
            return DAL.ValidateUser(email, password);
        }
    }
}
