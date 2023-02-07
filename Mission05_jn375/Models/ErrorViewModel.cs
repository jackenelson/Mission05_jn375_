using System;
using System.ComponentModel.DataAnnotations;
namespace Mission05_jn375.Models
{
    public class FormModel
    {

        [Range(0, 100)]
        public string assign { get; set; }

        [Range(0, 100)]
        public string project { get; set; }

        [Range(0, 100)]
        public string quiz { get; set; }

        [Range(0, 100)]
        public string midterm { get; set; }

        [Range(0, 100)]
        public string final { get; set; }

        [Range(0, 100)]
        public string intex { get; set; }


    }
}
