using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace DB6_Capstone_G3.Models
{
    [Table("event")]
    public class Event
    {
        [Key]
        public int idEvent { get; set; }
        public int idUser { get; set; }
        public string eventName { get; set; }
        public DateTime date { get; set; }
        public string city { get; set; }
        public string state { get; set; }

    }
}
