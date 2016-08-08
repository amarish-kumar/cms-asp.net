using System;

namespace Models
{
    public class Comment
    {
        public Guid CommentID { get; set; }

        public string CommentContent { get; set; }

        public DateTime Date { get; set; }
        
        public Guid ProfileUserID { get; set; }
        
        public Guid ImageID { get; set; }
    }
}