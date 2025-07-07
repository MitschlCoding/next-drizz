CREATE TABLE `user` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userName` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`createdAt` integer DEFAULT 0 NOT NULL,
	`updatedAt` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_userName_unique` ON `user` (`userName`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);