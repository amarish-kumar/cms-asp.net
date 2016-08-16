CREATE TABLE [dbo].[CommentImage]
(
	[CommentImageID] INT NOT NULL PRIMARY KEY,
	[ImageID] [uniqueidentifier] NOT NULL,
	[CommentID] [uniqueidentifier] NOT NULL,
	CONSTRAINT [FK_CommentImage_Image] FOREIGN KEY([ImageID]) REFERENCES [dbo].[Image] ([ImageID]),	
	CONSTRAINT [FK_CommentImage_Comment] FOREIGN KEY([CommentID]) REFERENCES [dbo].[Comment] ([CommentID])
)
