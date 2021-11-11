﻿using DB6_Capstone_G3.Models;
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
        public static User SaveUser(string firstName, string lastName, string phoneNumber, string email, string password)
        {
            return DAL.SaveUser(firstName, lastName, phoneNumber, email, password);
        }
    }
}
