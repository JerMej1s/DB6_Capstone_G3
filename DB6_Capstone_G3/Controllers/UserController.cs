﻿using DB6_Capstone_G3.Models;
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
        public User SaveUser(User newUser)
        {
            return DAL.SaveUser(newUser);
        }

        [HttpGet("home")]
        public static User GetUser(string email, string password)
        {
            return DAL.ValidateUser(email, password);
        }
    }
}
