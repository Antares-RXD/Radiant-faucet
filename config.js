/***************************
	Global Configuration Variables

	theme -  name of theme to load from http://bootswatch.com (leave blank for no theme)
	stylesheet - URL or path to stylesheet to use instead of theme
	title - Default <title> for the site
	brand - Default text for header brand (logo)
	copyright - copyright (current year is auto-filled)
	coin - name of the coin for this faucet
	symbol - symbol of the coin for this faucet
	session_secret - secret needed for Express sessions
	show_next_run - set to true to include next run date in left column
	show_wallet_balance - set to true to include current wallet balance in left column

	------------------------------------------------------
	pages - each key holds variables for that page
	pages.home.h1 - Main "welcome" text (<H1> tag)
	pages.home.faucet_text - Main column text (below H1)
	pages.home.payout_header - Text above the payout chart

	------------------------------------------------------
	rpc - connection info for RPC
	rpc.host - IP/hostname for RPC
	rpc.port - port for RPC
	rpc.user - username for RPC
	rpc.pass - password for RPC
	rpc.timeout - RPC request timeout (ms)
	rpc.ssl - set to true if using SSL for RPC (recommended if not on localhost)
	rpc.sslStrict - set to false if using self-signed SSL certificate
	rpc.account - name of the account to use in the daemon

	------------------------------------------------------
	faucet - options for running the faucet
	faucet.immediate - pay out immediately if the user/address passes checks
	faucet.interval - number of minutes between payouts if immediate=false
	faucet.user_limit - maximum number of times to pay a single user (by IP or address)
	faucet.payout - a number, array of values with weighted odds, or an object with range (if value is an object, must specify both minimum/maximum)
	- object example: {minimum:0.00001,maximum:0.0001}
	- array example: [[0.0001,1],[0.00007,3],[0.00005,6],[0.00003,10],[0.00001,20]]
	-- In this example, there are 1+3+6+10+20 = 40 chances.  0.00001 has a 50% chance, 0.00003 has a 25% chance, 0.0001 has a 2.5% chance
	-- Integers only for chances!

	------------------------------------------------------
	database - options for local file database
	database.processor - filename for db holding processor data
	database.users - filename for db holding user data

	------------------------------------------------------
	dashboard - options for the administrator dashboard
	dashboard.path - URL path to use (e.g. /dashboard)
	dashboard.password - Password to login

	------------------------------------------------------
	wallet_explorer_auth - Auth key for walletexplorer.net if you wish to report coin data (walletexplorer helps the community keep their wallets up to date by tracking what versions are in use by public services)
****************************/
module.exports = {
	'theme': "darkly"
	,'stylesheet': ""
	,'title': "Radiant Faucet"
	,'brand': "RXD Faucet"
	,'copyright': '<a href="https://radiantblockchain.org">Radiant</a>'
	,'coin': "Radiant"
	,'symbol': "RXD"
	,'pages':{
		'home':{
			'faucet_text':'<h5>This faucet has been created for testing purposes. Please, do not abuse it.<br/><br/><br/>-------------------<br/>Enter your Radiant address below to receive free RXD.<br/></h5>'
			,'payout_header':'Faucet Wallet'
		}
	}
	,'session_secret':"alphanumericphrase"
	,'show_next_payout': false
	,'show_wallet_balance': true
	,'rpc':{
		'host':"localhost"
		,'port':7332
		,'user':"user"
		,'pass':"pass"
		,'timeout':30000
		,'ssl':false
		,'sslStrict':false
		,'account':'faucet'
	}
	,'faucet':{
		'immediate':false
		,'interval':720 //720 = 12 hours
		,'user_limit':10
		,'payout':0.001
	},

	'webServer': {
		'port': 3009
	},
	'database':{
		'processor':'processor.db'
		,'users':'users.db'
	}
	,'dashboard':{
		'path':'/dashboard'
		,'password':'somehardpasswordhere'
	}
	,'wallet_explorer_auth':''
};
