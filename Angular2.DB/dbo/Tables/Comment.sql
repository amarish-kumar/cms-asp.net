CREATE TABLE [dbo].[Comment]
(
	[CommentID] [uniqueidentifier] NOT NULL PRIMARY KEY,
	[CommentFatherID] [uniqueidentifier] NOT NULL,
	[CommentContent] [nvarchar](max) NULL,
	[Date] [datetime] NOT NULL,
	[ProfileUserID] [uniqueidentifier] NOT NULL,
	CONSTRAINT [FK_dbo.Comments_dbo.ProfileUsers_ProfileUserID] FOREIGN KEY([ProfileUserID]) REFERENCES [dbo].[ProfileUser] ([ProfileUserID]),
	CONSTRAINT [FK_dbo.Comments_dbo.Comments_CommentFatherID] FOREIGN KEY([CommentFatherID]) REFERENCES [dbo].[Comment] ([CommentID])
)
