using System;

namespace Models
{
    public class Image
    {
        public Guid ImageID { get; set; }

        public DateTime Date { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string ImageP { get; set; }

        public Guid GalleryID { get; set; }
    }
}