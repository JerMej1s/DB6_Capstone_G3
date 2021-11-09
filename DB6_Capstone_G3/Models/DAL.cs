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
        private static HttpClient client = null;
        private static HttpClient GetHttpClient()
        {
            if (client is null)
            {
                client = new HttpClient();
                client.BaseAddress = new Uri("https://www.thecocktaildb.com/");
            }

            return client;
        }

        public async static Task<IEnumerable<Cocktail>> GetCocktailsByName(string userSearch)
        {
            var connection = await GetHttpClient().GetAsync($"www.thecocktaildb.com/api/json/v1/1/search.php?s={userSearch}");
            IEnumerable<Cocktail> response = await connection.Content.ReadAsAsync<IEnumerable<Cocktail>>();
            return response;
        }

        public async static Task<IEnumerable<Cocktail>> GetCocktailsByIngredient(string userSearch)
        {
            var connection = await GetHttpClient().GetAsync($"www.thecocktaildb.com/api/json/v1/1/filter.php?i={userSearch}");
            IEnumerable<Cocktail> response = await connection.Content.ReadAsAsync<IEnumerable<Cocktail>>();
            return response;
        }

        public async static Task<IEnumerable<Cocktail>> GetCocktailsByFirstLetter(char userSearch)
        {
            var connection = await GetHttpClient().GetAsync($"www.thecocktaildb.com/api/json/v1/1/search.php?f={userSearch}");
            IEnumerable<Cocktail> response = await connection.Content.ReadAsAsync<IEnumerable<Cocktail>>();
            return response;
        }

        public static MySqlConnection db;
        public static User saveUser(string firstName, string lastName, string phoneNumber)
        {
            User user = new User()
            {
                firstName = firstName,
                lastName = lastName,
                phoneNumber = phoneNumber
            };

            db.Insert(user);
            return user;
        }

        public static Event saveEvent(int idUser, DateTime date, string city, string state)
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
        
        public static Cocktail saveCocktailToEvent(int idDrink, int idEvent)
        {
            Cocktail cocktail = new Cocktail()
            {
                idDrink = idDrink,
                idEvent = idEvent
            };

            db.Insert(cocktail);
            return cocktail;
        }

        public static Meal saveMealToEvent(int idMeal, int idEvent)
        {
            Meal meal = new Meal()
            {
                idMeal = idMeal,
                idEvent = idEvent
            };

            db.Insert(meal);
            return meal;
        }

        public static IEnumerable<Event> getEventsForUser(int idUser)
        {
            IEnumerable<Event> result = db.Query<Event>("select * from event where idUser = @idUser", idUser);
            return result;
        }

        public static IEnumerable<Cocktail> getCocktailsForEvent(string idEvent)
        {
            IEnumerable<Cocktail> result = db.Query<Cocktail>("select * from cocktail where idEvent = @idEvent", idEvent);
            return result;
        }

        public static IEnumerable<Meal> getMealsForEvent(string idEvent)
        {
            IEnumerable<Meal> result = db.Query<Meal>("select * from meal where idEvent = @idEvent", idEvent);
            return result;
        }
    }
}
