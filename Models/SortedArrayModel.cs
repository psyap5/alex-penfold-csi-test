using System;
using System.ComponentModel.DataAnnotations;

namespace alexpenfoldcsitest.Models
{
    public class SortedArrayModel
    {
        [Key]
        public int ID { get; set; }
        [StringLength(1024, MinimumLength = 1)]
        public string Array { get; set; }
        public ArrayDirection Direction { get; set; }
        public string Duration { get; set; }
    }
}
