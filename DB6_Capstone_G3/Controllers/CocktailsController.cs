using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DB6_Capstone_G3.Models;
using Microsoft.AspNetCore.Http;

namespace DB6_Capstone_G3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CocktailsController : Controller
    {
        [HttpGet("cocktail/{drinkName}")]
        public async Task<IEnumerable<Cocktail>> GetDrinkName(string drinkName)
        {
            return await DAL.GetCocktailsByName(drinkName);
        }

        [HttpGet("cocktail/{ingredient}")]
        public async Task<IEnumerable<Cocktail>> GetDrinkNameByIngredient(string ingredient)
        {
            return await DAL.GetCocktailsByIngredient(ingredient);
        }

        [HttpGet("cocktail/{firstLetterSearch}")]
        public async Task<IEnumerable<Cocktail>> GetDrinkNameByFirstLetter(char firstLetterSearch)
        {
            return await DAL.GetCocktailsByFirstLetter(firstLetterSearch);
        }


    }
}
