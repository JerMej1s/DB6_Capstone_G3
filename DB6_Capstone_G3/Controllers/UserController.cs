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
        // Routes:
        //  /user/register -- present user with a form to create account
        //  /user/login -- present user with a login form
        //  /user/home/idUser -- present user with their event(s)

        [HttpGet("register")]
        public IActionResult UserRegistrationForm()
        {
            return View();
        }

        public IActionResult AddUser(string firstName, string lastName, string phoneNumber, string username, string password)
        {
            User user = DAL.SaveUser(firstName, lastName, phoneNumber, username, password);
            return Redirect($"home/{user.idUser}");
        }

        [HttpGet("login")]
        public IActionResult UserLogin(string username, string password)
        {
            User user = DAL.GetUserByUsername(username, password);

            if (user is null)
            {
                ViewData["InvalidUsername"] = "Incorrect username. Please try again.";
                return View("login");
            }
            else if (password != user.password)
            {
                ViewData["username"] = user.username;
                ViewData["InvalidPassword"] = "Incorrect password. Please try again.";
                return View("login");
            }
            else
            {
                return Redirect($"home/{user.idUser}");
            }
        }

        [HttpGet("home/{idUser}")]
        public IActionResult HomePage(int idUser)
        {
            IEnumerable<Event> events = DAL.GetEventsForUser(idUser);
            return View(events);
        }
    }
}