source 'https://rubygems.org'
ruby '2.3.0'

# Framework & Core
gem 'rails', '4.2.5'
gem 'pg', '~> 0.15'
gem 'bcrypt', '~> 3.1.7'
# redis
# puma

# Asset
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails'
gem 'slim-rails', '~> 3.0.1'
gem 'react-rails', '~> 1.6.0'
# REMOVE: gem 'coffee-rails', '~> 4.1.0'
# REMOVE: gem 'turbolinks'

# Third Party
# stripe
# twilio-ruby
# sentry-raven
# newrelic_rpm
# TODO: Email gem

# Misc
gem 'jbuilder', '~> 2.0'
# sidekiq
# gem 'foreman'
# gem 'virtus'
# gem 'rack-timeout'
# gem 'sinatra', :require => nil # For Sidekiq web admin
# gem 'timecop'
# gem 'ahoy_matey'

group :development do
  gem 'web-console', '~> 2.0'
  gem 'spring'
end

group :test do
#  gem 'webmock'
#  gem 'database_cleaner'
#  gem 'mock_redis'
end

group :development, :test do
  gem 'pry'
#  gem 'dotenv-rails'
  gem 'rspec-rails'
  gem 'factory_girl_rails', "~> 4.6"
end

group :production do
  gem 'rails_12factor' # Heroku
end
