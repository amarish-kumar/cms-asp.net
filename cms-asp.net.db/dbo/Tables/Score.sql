CREATE TABLE [dbo].[Score]
(
	[ScoreID] [uniqueidentifier] NOT NULL PRIMARY KEY,
	[Date] [datetime] NOT NULL,
	[ImagesScoreID] [uniqueidentifier] NOT NULL,
	[IsLike] [bit] NOT NULL,
	CONSTRAINT [FK_Score_ImagesScore] FOREIGN KEY([ImagesScoreID]) REFERENCES [dbo].[ImagesScore] ([ImagesScoreID])
)
