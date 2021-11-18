using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Dapper;
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;
using DB6_Capstone_G3.Models;

namespace DB6_Capstone_G3.Models
{
    public class DAL
    {
        // DAL for cocktail API
        public static HttpClient cocktailClient = null;
        public static HttpClient GetHttpCocktailClient()
        {
            if (cocktailClient is null)
            {
                cocktailClient = new HttpClient();
                cocktailClient.BaseAddress = new Uri("https://www.thecocktaildb.com/");
            }

            return cocktailClient;
        }

        public async static Task<CocktailResponse> GetCocktailsByName(string userSearch)
        {
            var connection = await GetHttpCocktailClient().GetAsync($"api/json/v1/1/search.php?s={userSearch}");
            CocktailResponse response = await connection.Content.ReadAsAsync<CocktailResponse>();
            return response;
        }

        public async static Task<CocktailResponse> GetCocktailsByIngredient(string userSearch)
        {
            var connection = await GetHttpCocktailClient().GetAsync($"api/json/v1/1/filter.php?i={userSearch}");
            CocktailResponse response = await connection.Content.ReadAsAsync<CocktailResponse>();
            return response;
        }

        public async static Task<CocktailResponse> GetCocktailsByFirstLetter(char userSearch)
        {
            var connection = await GetHttpCocktailClient().GetAsync($"api/json/v1/1/search.php?f={userSearch}");
            CocktailResponse response = await connection.Content.ReadAsAsync<CocktailResponse>();
            return response;
        }

        public async static Task<CocktailResponse> GetRandomCocktail()
        {
            var connection = await GetHttpCocktailClient().GetAsync("api/json/v1/1/random.php");
            CocktailResponse response = await connection.Content.ReadAsAsync<CocktailResponse>();
            return response;
        }

        public async static Task<CocktailResponse> GetCocktailDetails(int idDrink)
        {
            var connection = await GetHttpCocktailClient().GetAsync($"api/json/v1/1/lookup.php?i={idDrink}");
            CocktailResponse response = await connection.Content.ReadAsAsync<CocktailResponse>();
            return response;
        }

        // DAL for meal API
        public static HttpClient mealClient = null;
        public static HttpClient GetHttpMealClient()
        {
            if (mealClient is null)
            {
                mealClient = new HttpClient();
                mealClient.BaseAddress = new Uri("https://www.themealdb.com/");
            }

            return mealClient;
        }

        public async static Task<MealResponse> GetMealsByName(string userSearch)
        {
            var connection = await GetHttpMealClient().GetAsync($"api/json/v1/1/search.php?s={userSearch}");
            MealResponse response = await connection.Content.ReadAsAsync<MealResponse>();
            return response;
        }

        public async static Task<MealResponse> GetMealsByIngredient(string userSearch)
        {
            var connection = await GetHttpMealClient().GetAsync($"api/json/v1/1/filter.php?i={userSearch}");
            MealResponse response = await connection.Content.ReadAsAsync<MealResponse>();
            return response;
        }

        public async static Task<MealResponse> GetMealsByFirstLetter(char userSearch)
        {
            var connection = await GetHttpMealClient().GetAsync($"api/json/v1/1/search.php?f={userSearch}");
            MealResponse response = await connection.Content.ReadAsAsync<MealResponse>();
            return response;
        }

        public async static Task<MealResponse> GetRandomMeal()
        {
            var connection = await GetHttpMealClient().GetAsync("api/json/v1/1/random.php");
            MealResponse response = await connection.Content.ReadAsAsync<MealResponse>();
            return response;
        }

        public async static Task<MealResponse> GetMealDetails(int idMeal)
        {
            var connection = await GetHttpMealClient().GetAsync($"api/json/v1/1/lookup.php?i={idMeal}");
            MealResponse response = await connection.Content.ReadAsAsync<MealResponse>();
            return response;
        }

        // DAL for database
        public static MySqlConnection db;
        public static User SaveUser(User user)
        {
            db.Insert(user);
            return user;
        }

        public static int ValidateUser(UserLogin user)
        {

            var parameters = new { email = user.email, password = user.password};
            //var parameters = new { user.email = email, user.password = password };

            int idUser = db.QuerySingle<int>($"select idUser from user where email = @email", parameters);
            string password = db.QuerySingle<string>($"select password from user where email = @email", parameters);
            if (user is null)
            {
                // send user back to login screen with incorrect email message
            }
            else if (user.password != password)
            {
                // send user back to login screen with incorrect password message
            }
            return idUser;
        }

        public static Event SaveEvent(Event newEvent)
        {
            db.Insert(newEvent);
            return newEvent;
        }
        
        public static Cocktail SaveCocktailToEvent( CocktailResponse cocktailResponse, int idEvent)
        {
            var cocktailList = cocktailResponse.drinks.ToList();
            Cocktail cocktail = new Cocktail();
            cocktail.strDrink = cocktailList[0].strDrink;
            cocktail.idDrinkz = cocktailList[0].idDrink;
            cocktail.idEvent = idEvent;

            db.Insert(cocktail);
            return cocktail;
        }

        public static Meal SaveMealToEvent(MealResponse mealResponse, int idEvent)
        {
            var mealList = mealResponse.meals.ToList();
            Meal meal = new Meal();
            meal.strMeal = mealList[0].strMeal;
            meal.idMealz = mealList[0].idMeal;
            meal.idEvent = idEvent;

            db.Insert(meal);
            return meal;
        }

        public static IEnumerable<Event> GetEventsForUser(int idUser)
        {
            var parameters = new { idUser = idUser };
            IEnumerable<Event> result = db.Query<Event>("select * from event where idUser = @idUser", parameters);
            return result;
        }

        public static IEnumerable<Cocktail> GetCocktailsForEvent(string idEvent)
        {
            var parameters = new { idEvent = idEvent };
            IEnumerable<Cocktail> result = db.Query<Cocktail>("select * from cocktail where idEvent = @idEvent", parameters);
            return result;
        }

        public static IEnumerable<Meals> GetMealsForEvent(string idEvent)
        {
            var parameters = new { idEvent = idEvent };
            IEnumerable<Meals> result = db.Query<Meals>("select * from meal where idEvent = @idEvent", parameters);
            return result;
        }
    }
}
