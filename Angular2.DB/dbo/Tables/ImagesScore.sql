CREATE TABLE [dbo].[ImagesScore]
(
	[ImagesScoreID] [uniqueidentifier] NOT NULL PRIMARY KEY,
	[ImageID] [uniqueidentifier] NOT NULL,
	CONSTRAINT [FK_dbo.ImagesScores_dbo.Image] FOREIGN KEY([ImageID]) REFERENCES [dbo].[Image] ([ImageID])
)
