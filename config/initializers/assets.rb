# Be sure to restart your server when you modify this file.

# Version of your assetss, change this if you want to expire all your assetss.
Rails.application.config.assets.version = '1.0'

# Add additional assetss to the asset load path.
# Rails.application.config.assetss.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

Rails.application.config.assets.paths << Rails.root.join('app', 'assets', 'fonts')
Rails.application.config.assets.precompile += %w( page.scss page.js )
# Precompile additional assetss.
# application.js, application.css, and all non-JS/CSS in the app/assetss
# folder are already added.
# Rails.application.config.assetss.precompile += %w( admin.js admin.css )
