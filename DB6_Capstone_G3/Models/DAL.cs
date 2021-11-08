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
        public static MySqlConnection Database;
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

        public async static Task<Cocktail> GetCocktailByName(string userSearch)
        {
            var connection = await GetHttpClient().GetAsync($"www.thecocktaildb.com/api/json/v1/1/search.php?s={userSearch}");
            Cocktail response = await connection.Content.ReadAsAsync<Cocktail>();
            return response;
        }

        public async static Task<Cocktail[]> GetCocktailsByIngredient(string userSearch)
        {
            var connection = await GetHttpClient().GetAsync($"www.thecocktaildb.com/api/json/v1/1/filter.php?i={userSearch}");
            Cocktail[] response = await connection.Content.ReadAsAsync<Cocktail[]>();
            return response;
        }
    }
}
