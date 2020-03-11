# config valid for current version and patch releases of Capistrano
lock "~> 3.11.0"

# application and repo settings
set :application, "fork"
set :repo_url, "git@github.com:Larsvanduijkeren/Fork.git"

# branch = environment
set :branch, "master"

set :deploy_user, "deploy"

# target deployment
set :deploy_to, "/var/www/html/fork.larsvanduijkeren.nl"

set :theme_folder, "wp-content/themes/fork"
set :root_folder, "../.."

# linked shared files
append :linked_files, ".env"

# linked shared directories
append :linked_dirs, "wp-content/uploads"

before "deploy:starting", "assets:install"
# after "assets:install", "assets:compile"
# after "deploy:finished", "assets:sync"
after "deploy:finished", "dependencies:install"
after "deploy:finished", "dependencies:sync"
after "deploy:finished", "dependencies:dump"
after "deploy:finished", "permissions:fix"
