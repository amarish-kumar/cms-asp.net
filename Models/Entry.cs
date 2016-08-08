using System;

namespace Models
{
    public class Entry
    {
        public Guid EntryID { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }

        public DateTime Date { get; set; }

        public string Description { get; set; }

        public string Image { get; set; }

        public Guid ProfileUserID { get; set; }
    }
}