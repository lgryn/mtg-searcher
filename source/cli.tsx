#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import {Command} from 'commander';
import Add from './commands/add.js';

const cli = new Command();

cli
	.name('mtg-searcher')
	.description(
		"Build your MTG collection faster. Search cards from your wishlist in trader's lists.",
	)
	.version('0.0.1');

cli
	.command('add <url>')
	.description('Add your wishlist')
	.action(url => {
		render(<Add url={url} />);
	});

cli.parse(process.argv);
