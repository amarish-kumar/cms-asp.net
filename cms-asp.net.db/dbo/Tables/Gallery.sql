CREATE TABLE [dbo].[Gallery]
(
	[GalleryID] [uniqueidentifier] NOT NULL PRIMARY KEY,
	[Description] [nvarchar](max) NULL,
	[Image] [nvarchar](max) NULL,
	[Title] [nvarchar](max) NULL,
	[CategoryID] [uniqueidentifier] NOT NULL,
	CONSTRAINT [FK_dbo.Categoriy_dbo.Category_CategoryID] FOREIGN KEY([CategoryID]) REFERENCES [dbo].[Category] ([CategoryID])
)
