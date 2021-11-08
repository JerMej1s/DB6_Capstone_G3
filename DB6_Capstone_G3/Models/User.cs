using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;
using MySql.Data;

namespace DB6_Capstone_G3.Models
{
    [Table("user")]
    public class User
    {
        [ExplicitKey]
        public int isUser { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string phoneNumber { get; set; }
    }
}
