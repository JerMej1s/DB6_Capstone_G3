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

        public async static Task<Cocktail[]> GetCocktailsByIngredient(string userSearch)
        {
            var connection = await GetHttpClient().GetAsync($"www.thecocktaildb.com/api/json/v1/1/filter.php?i={userSearch}");
            Cocktail[] response = await connection.Content.ReadAsAsync<Cocktail[]>();
            return response;
        }

        public async static Task<Cocktail[]> GetCocktailsByFirstLetter(char userSearch)
        {
            var connection = await GetHttpClient().GetAsync($"www.thecocktaildb.com/api/json/v1/1/search.php?f={userSearch}");
            Cocktail[] response = await connection.Content.ReadAsAsync<Cocktail[]>();
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

        public static Event saveEvent(int idUser, string city, string state)
        {
            Event newEvent = new Event()
            {
                idUser = idUser,
                date = DateTime.Now,
                city = city,
                state = state
            };

            db.Insert(newEvent);
            return newEvent;
        }
        
        public static Cocktail saveCocktail(int idEvent, int idDrink, string userName)
        {
            Cocktail cocktail = new Cocktail()
            {
                idDrink = idDrink
            };

            db.Insert(cocktail);
            return cocktail;
        }
    }
}
