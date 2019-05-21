using System;
using alexpenfoldcsitest.Models;
using Microsoft.EntityFrameworkCore;

namespace alexpenfoldcsitest.Contexts
{
    public class SortedArrayContext : DbContext
    {
        public DbSet<SortedArrayModel> SortedArrays { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=sortedArray.db");
        }
    }
}
