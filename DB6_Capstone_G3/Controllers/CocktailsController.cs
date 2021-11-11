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
        [HttpGet("{drinkName}")]
        public async Task<CocktailResponse> GetDrinkName(string drinkName)
        {
            return await DAL.GetCocktailsByName(drinkName);
        }

        [HttpGet("ingredient/{ingredient}")]
        public async Task<CocktailResponse> GetDrinkNameByIngredient(string ingredient)
        {
            return await DAL.GetCocktailsByIngredient(ingredient);
        }

        [HttpGet("letter/{firstLetterSearch}")]
        public async Task<CocktailResponse> GetDrinkNameByFirstLetter(char firstLetterSearch)
        {
            return await DAL.GetCocktailsByFirstLetter(firstLetterSearch);
        }

        [HttpGet("random")]
        public async Task<CocktailResponse> GetRandomCocktail()
        {
            return await DAL.GetRandomCocktail();
        }

        [HttpPost("save")]
        public Cocktail SaveCocktail(int idDrink, int idEvent, string strDrink)
        {
            return DAL.SaveCocktailToEvent(idDrink, idEvent, strDrink);
        }

        //[HttpGet("test")]
        //public async Task<CocktailResponse> runtest()
        //{
        //    return await DAL.GetCocktailsByName("margarita");
        //}
    }
}
