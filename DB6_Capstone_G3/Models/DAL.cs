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
        public static HttpClient Client = null;
        public static HttpClient GetHttpCocktailClient()
        {
            if (Client is null)
            {
                Client = new HttpClient();
                Client.BaseAddress = new Uri("https://www.thecocktaildb.com/");
            }

            return Client;
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

        // DAL for meal API
        public static HttpClient GetHttpMealClient()
        {
            if (Client is null)
            {
                Client = new HttpClient();
                Client.BaseAddress = new Uri("https://www.themealdb.com/");
            }

            return Client;
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

        // DAL for database
        public static MySqlConnection db;
        public static User SaveUser(string firstName, string lastName, string phoneNumber, string email, string password)
        {
            User user = new User()
            {
                firstName = firstName,
                lastName = lastName,
                phoneNumber = phoneNumber,
                email = email,
                password = password
            };

            db.Insert(user);
            return user;
        }

        public static User GetUserByUsername(string email, string password)
        {
            User user = db.QuerySingle<User>($"select * from user where username = @email", email);
            return user;
        }

        public static Event SaveEvent(int idUser, DateTime date, string city, string state)
        {
            Event newEvent = new Event()
            {
                idUser = idUser,
                date = date,
                city = city,
                state = state
            };

            db.Insert(newEvent);
            return newEvent;
        }
        
        public static Cocktail SaveCocktailToEvent(int idDrink, int idEvent)
        {
            Cocktail cocktail = new Cocktail()
            {
                idDrink = idDrink,
                idEvent = idEvent
            };

            db.Insert(cocktail);
            return cocktail;
        }

        public static Meal SaveMealToEvent(int idMeal, int idEvent)
        {
            Meal meal = new Meal()
            {
                idMeal = idMeal,
                idEvent = idEvent
            };

            db.Insert(meal);
            return meal;
        }

        public static IEnumerable<Event> GetEventsForUser(int idUser)
        {
            IEnumerable<Event> result = db.Query<Event>("select * from event where idUser = @idUser", idUser);
            return result;
        }

        public static IEnumerable<Cocktail> GetCocktailsForEvent(string idEvent)
        {
            IEnumerable<Cocktail> result = db.Query<Cocktail>("select * from cocktail where idEvent = @idEvent", idEvent);
            return result;
        }

        public static IEnumerable<Meals> GetMealsForEvent(string idEvent)
        {
            IEnumerable<Meals> result = db.Query<Meals>("select * from meal where idEvent = @idEvent", idEvent);
            return result;
        }
    }
}
