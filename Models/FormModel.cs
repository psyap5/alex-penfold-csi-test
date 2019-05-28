using System;
using System.ComponentModel.DataAnnotations;

namespace alexpenfoldcsitest.Models
{
    public class FormModel
    {
        [StringLength(1024, MinimumLength = 1)]
        public string UnsortedArrayText { get; set; }

        public ArrayDirection Direction { get; set; }

        [StringLength(1024, MinimumLength = 1)]
        public string SortedArrayText { get; set; }
    }
}
