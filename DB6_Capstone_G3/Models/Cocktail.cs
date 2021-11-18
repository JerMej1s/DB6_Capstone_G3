using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data;
using Dapper.Contrib.Extensions;

namespace DB6_Capstone_G3.Models
{
    [Table("cocktail")]
    public class Cocktail
    {
        
        [Key]
        public int idDrink { get; set; }
        public int idDrinkz { get; set; }
        public int idEvent { get; set; }
        public string strDrink { get; set; }
    }
}
