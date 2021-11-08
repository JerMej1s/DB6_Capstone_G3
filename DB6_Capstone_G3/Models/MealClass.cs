using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;
using MySql.Data;

namespace DB6_Capstone_G3.Models
{
    [Table("meal")]
    public class MealClass
    {
        [Key]
        int idMeal { get; set; }
        string strMeal { get; set; }
        string strInstructions { get; set; }
        string strMealThumb { get; set; }
        string strIngredient1 { get; set; }
        string strIngredient2 { get; set; }
        string strIngredient3 { get; set; }
        string strIngredient4 { get; set; }
        string strIngredient5 { get; set; }
        string strIngredient6 { get; set; }
        string strIngredient7 { get; set; }
        string strIngredient8 { get; set; }
        string strIngredient9 { get; set; }
        string strIngredient10 { get; set; }
        string strIngredient11 { get; set; }
        string strIngredient12 { get; set; }
        string strIngredient13 { get; set; }
        string strIngredient14 { get; set; }
        string strIngredient15 { get; set; }
        string strIngredient16 { get; set; }

        string strIngredient17 { get; set; }
        string strIngredient18 { get; set; }
        string strIngredient19 { get; set; }
        string strIngredient20 { get; set; }


        string strMeasure1 { get; set; }
        string strMeasure2 { get; set; }
        string strMeasure3 { get; set; }
        string strMeasure4 { get; set; }
        string strMeasure5 { get; set; }
        string strMeasure6 { get; set; }
        string strMeasure7 { get; set; }
        string strMeasure8 { get; set; }
        string strMeasure9 { get; set; }
        string strMeasure10 { get; set; }
        string strMeasure11 { get; set; }
        string strMeasure12 { get; set; }
        string strMeasure13 { get; set; }
        string strMeasure14 { get; set; }
        string strMeasure15 { get; set; }
        string strMeasure16 { get; set; }
        string strMeasure17 { get; set; }
        string strMeasure18 { get; set; }
        string strMeasure19 { get; set; }
        string strMeasure20 { get; set; }
    }
}
