using Microsoft.EntityFrameworkCore;

namespace TodoAppAPI.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Todo> Todos { get; set; }
    }
}
