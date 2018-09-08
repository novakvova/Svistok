using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebAppShop.Models.Entities
{
    [Table("tblCategories")]
    public class Category
    {
        [Key]
        public int Id { get; set; }
        [Display(Name="Category Name")]
        [Required(ErrorMessage ="The category name cannot be blank")]
        [StringLength(50, MinimumLength =3,
            ErrorMessage ="Please enter a category name between 3 and 50 charecter in length")]
        public string Name { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}