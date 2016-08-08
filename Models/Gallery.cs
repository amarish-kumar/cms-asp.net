namespace Models
{
    using System;

    public class Gallery
    {
        public string Description { get; set; }

        public Guid GalleryID { get; set; }

        public string Image { get; set; }

        public string Title { get; set; }

        public Guid ProfileUserID { get; set; }
    }
}