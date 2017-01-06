# Test Nunchee

This app use PHP (cURL) and JS (jQuery) to send request to login endpoint and displays the response of server

### Stack

    - SLIM PHP 3.0
    - JS / jQuery
    - Bootstrap 3

### System Requirements
    - Web server with URL rewriting
    - PHP 5.5 or newer
    - Composer
    
### Installation
After cloning this repo, run:

    $ cd test-tecnico
    $ composer install

If you use your own server, you'll want to:

* Point your virtual host document root to application's `public/` directory.
* Ensure `logs/` is web writeable.

To run the application in development, you can also run this command:

    $ composer start


Or direct with PHP:

    $ php -S 0.0.0.0:8080 -t public public/index.php

And open `http://0.0.0.0:8080

If you prefer, run this project on your own PHP environment and open this url:

    http://localhost/public/index.php

Where `http://localhost/` is your development server (maybe with some port, etc)

### Loggin
All requests are saved in a log file, the directory is:

    logs/

### Development conventions

  - [Git-Flow](https://github.com/nvie/gitflow), Reference: [Git-Flow cheatsheet](http://danielkummer.github.io/git-flow-cheatsheet/)
  - Semantic commits format, Reference: [Semantic Commit Messages](https://seesparkbox.com/foundry/semantic_commit_messages)

### Project Structure

```sh
├── README.md
├── composer.json
├── composer.lock
├── logs
│   └── app.log
├── public
│   ├── assets
│   └── index.php
├── src
│   ├── dependencies.php
│   ├── middleware.php
│   ├── routes.php
│   └── settings.php
├── templates
│   └── index.phtml
└── vendor

```
The principal files used, are `templates/index.phtml`(the view), `src/routes.php` and `middleware.php` that manage requests and parse server responses

