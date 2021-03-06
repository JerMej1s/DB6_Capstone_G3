using DB6_Capstone_G3.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DB6_Capstone_G3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MealsController : ControllerBase
    {
        [HttpGet("{mealName}")]
        public async Task<MealResponse> SearchMealByName(string mealName)
        {
            return await DAL.GetMealsByName(mealName);
        }

        [HttpGet("ingredient/{ingredient}")]
        public async Task<MealResponse> SearchMealByIngredient(string ingredient)
        {
            return await DAL.GetMealsByIngredient(ingredient);
        }

        [HttpGet("letter/{firstLetterSearch}")]
        public async Task<MealResponse> SearchMealByFirstLetter(char firstLetterSearch)
        {
            return await DAL.GetMealsByFirstLetter(firstLetterSearch);
        }

        [HttpGet("random")]
        public async Task<MealResponse> GetRandomMeal()
        {
            return await DAL.GetRandomMeal();
        }

        [HttpGet("details/{idMeal}")]
        public async Task<MealResponse> GetMealDetailsById([FromRoute] int idMeal)
        {
            return await DAL.GetMealDetails(idMeal);
        }

        [HttpPost("save/{idEvent}")]
        public Meal SaveMeal([FromBody] MealResponse mealResponse, [FromRoute] int idEvent)
        {
            return DAL.SaveMealToEvent(mealResponse, idEvent);
        }
    }
}
