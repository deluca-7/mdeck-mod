mammudeck mod
=============

This repo contains the main files intended for an initial mod of mammudeck.

It's currently meant to run in the browser via extensions:

Stylus
------

Can be found here for Chrome/Brave:
https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne

This will apply custom styles to a web page. Simply paste the CSS from
main.css into its editor and at the bottom set "URLs starting with"
and fill in `https://mammudeck.com/`.

Tampermonkey
------------

Can be found here for Chrome/Brave:
https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo

This will run custom JavaScript for a site. The code here will
remove any current inline style to allow for custom CSS since inline
style has higher priority.

Simply paste in the code as-is and reload the page.

You can also use this code with GreaseMonkey if you prefer Firefox.
