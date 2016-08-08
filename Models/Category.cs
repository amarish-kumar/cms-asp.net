using System;
namespace Models
{

    public class Category
    {
        public Guid CategoryID { get; set; }

        public string NameCategory { get; set; }

        public string Description { get; set; }

        public string Image { get; set; }
        
        public Guid GalleryID { get; set; }
    }
}