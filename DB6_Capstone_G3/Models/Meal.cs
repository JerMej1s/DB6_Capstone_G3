using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;
using MySql.Data;

namespace DB6_Capstone_G3.Models
{
    [Table("meal")]
    public class Meal
    {
        [Key]
        public int idMeal { get; set; }
        public int idEvent { get; set; }
        public string strMeal { get; set; }
    }
}
