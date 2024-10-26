using System.ComponentModel.DataAnnotations;

namespace TodoAppAPI.Models
{
    public class Todo
    {
        [Key]
        public int tid { get; set; }
        public string tname { get; set; }
        public int tstatus { get; set; }
    }
}
